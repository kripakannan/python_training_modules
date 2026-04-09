// ============================================================
//  playground.js — Python code simulator
// ============================================================

function updateLineNumbers() {
  const editor = document.getElementById("code-editor");
  const lineNums = document.getElementById("line-numbers");
  const lines = editor.value.split("\n").length;
  lineNums.textContent = Array.from({ length: lines }, (_, i) => i + 1).join("\n");
}

function handleTab(e) {
  if (e.key === "Tab") {
    e.preventDefault();
    const editor = document.getElementById("code-editor");
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    editor.value = editor.value.substring(0, start) + "    " + editor.value.substring(end);
    editor.selectionStart = editor.selectionEnd = start + 4;
    updateLineNumbers();
  }
}

function clearEditor() {
  document.getElementById("code-editor").value = "";
  updateLineNumbers();
}

function clearOutput() {
  document.getElementById("output-box").innerHTML =
    '<span class="output-placeholder">Output will appear here when you run your code...</span>';
}

function loadExample() {
  document.getElementById("code-editor").value = `# Welcome to the PyQuest Playground! 🐍
# Try editing this code and clicking Run!

name = "Alex"
age = 13
hobbies = ["coding", "gaming", "reading"]

print(f"Hi! My name is {name} and I'm {age} years old.")
print(f"In 5 years, I'll be {age + 5}!")
print()

print("My hobbies:")
for i, hobby in enumerate(hobbies, 1):
    print(f"  {i}. {hobby}")

# Simple calculation
scores = [85, 92, 78, 95, 88]
average = sum(scores) / len(scores)
print(f"\\nMy average score: {average:.1f}")

if average >= 90:
    print("Outstanding! 🏆")
elif average >= 80:
    print("Great job! 👍")
else:
    print("Keep it up! 💪")`;
  updateLineNumbers();
}

function insertSnippet(type) {
  const editor = document.getElementById("code-editor");
  const snippet = SNIPPETS[type];
  if (!snippet) return;

  const start = editor.selectionStart;
  const current = editor.value;
  const prefix = current && !current.endsWith("\n") ? "\n\n" : "";
  editor.value = current + prefix + snippet;
  editor.focus();
  updateLineNumbers();
}

// ---- Python Interpreter (Simulated) ----
function runCode() {
  const code = document.getElementById("code-editor").value.trim();
  const outputBox = document.getElementById("output-box");

  if (!code) {
    outputBox.innerHTML = '<span class="output-placeholder">No code to run! Write something first.</span>';
    return;
  }

  outputBox.innerHTML = '<span class="output-running">⏳ Running...</span>';

  setTimeout(() => {
    try {
      const result = simulatePython(code);
      outputBox.innerHTML = result.html;
    } catch (e) {
      outputBox.innerHTML = `<span class="output-error">❌ Error: ${escapeHtml(e.message)}</span>`;
    }
  }, 300);
}

function simulatePython(code) {
  const lines = code.split("\n");
  const output = [];
  const variables = {};
  let html = "";

  // Simple Python simulator
  const pyEnv = {
    vars: {},
    output: [],

    evaluate(expr) {
      expr = expr.trim();

      // String literals
      if ((expr.startsWith('"') && expr.endsWith('"')) ||
          (expr.startsWith("'") && expr.endsWith("'"))) {
        return expr.slice(1, -1);
      }

      // f-strings
      if (expr.match(/^f["']/)) {
        let s = expr.slice(2, -1);
        s = s.replace(/\{([^}]+)\}/g, (_, inner) => {
          return this.evaluate(inner.trim());
        });
        return s;
      }

      // Number
      if (!isNaN(expr)) return Number(expr);

      // Boolean
      if (expr === "True") return true;
      if (expr === "False") return false;
      if (expr === "None") return null;

      // Variable
      if (this.vars.hasOwnProperty(expr)) return this.vars[expr];

      // len()
      const lenMatch = expr.match(/^len\((.+)\)$/);
      if (lenMatch) {
        const val = this.evaluate(lenMatch[1]);
        return Array.isArray(val) ? val.length : String(val).length;
      }

      // range()
      const rangeMatch = expr.match(/^range\((.+)\)$/);
      if (rangeMatch) {
        const parts = rangeMatch[1].split(",").map(p => Number(this.evaluate(p.trim())));
        const [start, stop, step] = parts.length === 1 ? [0, parts[0], 1] :
                                     parts.length === 2 ? [parts[0], parts[1], 1] : parts;
        const arr = [];
        for (let i = start; i < stop; i += step) arr.push(i);
        return arr;
      }

      // List literal
      if (expr.startsWith("[") && expr.endsWith("]")) {
        const inner = expr.slice(1, -1).trim();
        if (!inner) return [];
        return inner.split(",").map(i => this.evaluate(i.trim()));
      }

      // Math expressions (safe eval for simple cases)
      const mathExpr = expr.replace(/\*\*/g, "**").replace(/([a-zA-Z_]\w*)/g, (m) => {
        if (["True", "False", "None", "and", "or", "not", "in"].includes(m)) return m;
        if (this.vars.hasOwnProperty(m)) {
          const v = this.vars[m];
          return typeof v === "string" ? JSON.stringify(v) : v;
        }
        return m;
      });

      try {
        // Very restricted eval for arithmetic only
        if (/^[0-9+\-*/().%\s<>=!&|"'a-zA-Z_,\[\]{}]+$/.test(mathExpr)) {
          return Function(`"use strict"; return (${mathExpr.replace(/\*\*/g, "**")})`)();
        }
      } catch (e) {}

      return expr;
    },

    formatValue(v) {
      if (v === null) return "None";
      if (v === true) return "True";
      if (v === false) return "False";
      if (Array.isArray(v)) return `[${v.map(i => JSON.stringify(i)).join(", ")}]`;
      return String(v);
    }
  };

  let outputLines = [];
  let errorMsg = null;
  let i = 0;

  // Very simple line-by-line parser
  while (i < lines.length && outputLines.length < 50) {
    let line = lines[i];
    const stripped = line.trim();

    // Skip comments and empty lines
    if (stripped === "" || stripped.startsWith("#")) { i++; continue; }

    // print()
    const printMatch = stripped.match(/^print\((.*)\)$/s);
    if (printMatch) {
      let args = printMatch[1].trim();
      if (args === "") {
        outputLines.push("");
        i++; continue;
      }

      // Handle end= parameter
      let endChar = "\n";
      const endMatch = args.match(/,\s*end\s*=\s*["']([^"']*)["']/);
      if (endMatch) {
        endChar = endMatch[1];
        args = args.replace(/,\s*end\s*=\s*["'][^"']*["']/, "").trim();
      }

      // Split by comma for multiple args
      const parts = smartSplit(args);
      const values = parts.map(p => pyEnv.formatValue(pyEnv.evaluate(p.trim())));
      const printed = values.join(" ");

      if (endChar === " " && outputLines.length > 0) {
        outputLines[outputLines.length - 1] += printed + " ";
      } else {
        outputLines.push(printed);
      }
      i++; continue;
    }

    // Assignment: x = value
    const assignMatch = stripped.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
    if (assignMatch && !stripped.includes("==")) {
      pyEnv.vars[assignMatch[1]] = pyEnv.evaluate(assignMatch[2]);
      i++; continue;
    }

    // += -= *= /=
    const augMatch = stripped.match(/^([a-zA-Z_]\w*)\s*(\+|-|\*|\/)=\s*(.+)$/);
    if (augMatch) {
      const [, name, op, valStr] = augMatch;
      const val = pyEnv.evaluate(valStr);
      const cur = pyEnv.vars[name] || 0;
      if (op === "+") pyEnv.vars[name] = cur + val;
      else if (op === "-") pyEnv.vars[name] = cur - val;
      else if (op === "*") pyEnv.vars[name] = cur * val;
      else if (op === "/") pyEnv.vars[name] = cur / val;
      i++; continue;
    }

    // for loop
    if (stripped.startsWith("for ")) {
      const forMatch = stripped.match(/^for\s+(\w+)\s+in\s+(.+):$/);
      if (forMatch) {
        const [, varName, iterExpr] = forMatch;
        const iterable = pyEnv.evaluate(iterExpr);
        const items = Array.isArray(iterable) ? iterable : [];
        const bodyLines = getIndentedBlock(lines, i + 1);

        for (const item of items) {
          // Check for enumerate
          const enumMatch = iterExpr.trim().match(/^enumerate\((.+?)(?:,\s*(\d+))?\)$/);
          if (enumMatch && stripped.includes(",")) {
            const varParts = stripped.match(/^for\s+(\w+),\s*(\w+)\s+in/);
            if (varParts) {
              const startAt = enumMatch[2] ? parseInt(enumMatch[2]) : 0;
              const arr = pyEnv.evaluate(enumMatch[1]);
              if (Array.isArray(arr)) {
                arr.forEach((val, idx) => {
                  pyEnv.vars[varParts[1]] = idx + startAt;
                  pyEnv.vars[varParts[2]] = val;
                  for (const bl of bodyLines) {
                    executeSimpleLine(bl.trim(), pyEnv, outputLines);
                  }
                });
              }
              i += bodyLines.length + 1; continue;
            }
          }

          // Check for key,value in dict.items()
          const kvMatch = stripped.match(/^for\s+(\w+),\s*(\w+)\s+in\s+(\w+)\.items\(\):/);
          if (kvMatch) {
            const dict = pyEnv.vars[kvMatch[3]] || {};
            Object.entries(dict).forEach(([k, v]) => {
              pyEnv.vars[kvMatch[1]] = k;
              pyEnv.vars[kvMatch[2]] = v;
              for (const bl of bodyLines) {
                executeSimpleLine(bl.trim(), pyEnv, outputLines);
              }
            });
            i += bodyLines.length + 1; continue;
          }

          pyEnv.vars[varName] = item;
          for (const bl of bodyLines) {
            executeSimpleLine(bl.trim(), pyEnv, outputLines);
          }
        }

        i += bodyLines.length + 1;
        continue;
      }
    }

    // while loop (limited)
    if (stripped.startsWith("while ")) {
      const whileMatch = stripped.match(/^while\s+(.+):$/);
      if (whileMatch) {
        const bodyLines = getIndentedBlock(lines, i + 1);
        let maxIter = 30;
        while (maxIter-- > 0) {
          const cond = pyEnv.evaluate(whileMatch[1]);
          if (!cond) break;
          for (const bl of bodyLines) {
            executeSimpleLine(bl.trim(), pyEnv, outputLines);
          }
        }
        i += bodyLines.length + 1;
        continue;
      }
    }

    // if/elif/else (simple, single condition)
    if (stripped.startsWith("if ")) {
      const ifMatch = stripped.match(/^if\s+(.+):$/);
      if (ifMatch) {
        const bodyLines = getIndentedBlock(lines, i + 1);
        const cond = evaluateCondition(pyEnv.evaluate(ifMatch[1]), pyEnv, ifMatch[1]);
        if (cond) {
          for (const bl of bodyLines) executeSimpleLine(bl.trim(), pyEnv, outputLines);
        }
        i += bodyLines.length + 1;
        continue;
      }
    }

    // import (just skip)
    if (stripped.startsWith("import ") || stripped.startsWith("from ")) {
      outputLines.push(`# [import statements are noted but not executed in simulation]`);
      i++; continue;
    }

    // input() — simulate
    if (stripped.includes("input(")) {
      outputLines.push(`# [input() not available in simulation — value set to "example"]`);
      i++; continue;
    }

    i++;
  }

  // Build HTML output
  if (outputLines.length === 0) {
    return { html: '<span class="output-placeholder">✅ Code ran successfully (no output)</span>' };
  }

  const htmlLines = outputLines.map(line => {
    if (line.startsWith("# [")) return `<span class="output-comment">${escapeHtml(line)}</span>`;
    if (line.startsWith("❌")) return `<span class="output-error">${escapeHtml(line)}</span>`;
    return `<span class="output-line">${escapeHtml(line)}</span>`;
  }).join("\n");

  return { html: htmlLines };
}

function executeSimpleLine(line, pyEnv, outputLines) {
  if (!line || line.startsWith("#")) return;

  const printMatch = line.match(/^print\((.*)\)$/s);
  if (printMatch) {
    let args = printMatch[1].trim();
    if (args === "") { outputLines.push(""); return; }

    let endChar = "\n";
    const endMatch = args.match(/,\s*end\s*=\s*["']([^"']*)["']/);
    if (endMatch) {
      endChar = endMatch[1];
      args = args.replace(/,\s*end\s*=\s*["'][^"']*["']/, "").trim();
    }

    const parts = smartSplit(args);
    const values = parts.map(p => pyEnv.formatValue(pyEnv.evaluate(p.trim())));
    const printed = values.join(" ");

    if (endChar !== "\n" && outputLines.length > 0) {
      outputLines[outputLines.length - 1] += printed + endChar;
    } else {
      outputLines.push(printed);
    }
    return;
  }

  const augMatch = line.match(/^([a-zA-Z_]\w*)\s*(\+|-|\*|\/)=\s*(.+)$/);
  if (augMatch) {
    const [, name, op, valStr] = augMatch;
    const val = pyEnv.evaluate(valStr);
    const cur = pyEnv.vars[name] || 0;
    if (op === "+") pyEnv.vars[name] = cur + val;
    else if (op === "-") pyEnv.vars[name] = cur - val;
    else if (op === "*") pyEnv.vars[name] = cur * val;
    else if (op === "/") pyEnv.vars[name] = cur / val;
    return;
  }

  const assignMatch = line.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
  if (assignMatch && !line.includes("==")) {
    pyEnv.vars[assignMatch[1]] = pyEnv.evaluate(assignMatch[2]);
  }
}

function evaluateCondition(val, pyEnv, expr) {
  if (typeof val === "boolean") return val;
  if (typeof val === "number") return val !== 0;
  if (typeof val === "string") return val.length > 0;
  if (Array.isArray(val)) return val.length > 0;
  return Boolean(val);
}

function getIndentedBlock(lines, startIdx) {
  const block = [];
  for (let j = startIdx; j < lines.length; j++) {
    if (lines[j].trim() === "" || lines[j].match(/^\s+/)) {
      block.push(lines[j]);
    } else {
      break;
    }
  }
  return block.filter(l => l.trim() !== "");
}

function smartSplit(str) {
  // Split by comma but not inside strings or brackets
  const parts = [];
  let depth = 0, inStr = false, strChar = "", current = "";

  for (let c of str) {
    if (!inStr && (c === '"' || c === "'")) { inStr = true; strChar = c; current += c; }
    else if (inStr && c === strChar) { inStr = false; current += c; }
    else if (!inStr && (c === "(" || c === "[" || c === "{")) { depth++; current += c; }
    else if (!inStr && (c === ")" || c === "]" || c === "}")) { depth--; current += c; }
    else if (!inStr && c === "," && depth === 0) { parts.push(current.trim()); current = ""; }
    else { current += c; }
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Init editor
document.addEventListener("DOMContentLoaded", () => {
  updateLineNumbers();
});
