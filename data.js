// ============================================================
//  data.js — All course content, quizzes, and badge data
// ============================================================

const LESSONS = [
  {
    id: "intro",
    title: "What is Python?",
    emoji: "🌟",
    level: "Beginner",
    color: "#FFD93D",
    xp: 20,
    content: `
      <h2>🌟 What is Python?</h2>
      <p>Python is one of the most popular programming languages in the world! It was created by Guido van Rossum in 1991 and named after the comedy group <em>Monty Python</em> — not the snake 🐍 (though the snake is cooler).</p>
      
      <div class="lesson-box info">
        <strong>💡 Fun Fact:</strong> Python is used by NASA, Google, Netflix, Instagram, and millions of developers worldwide!
      </div>

      <h3>Why Learn Python?</h3>
      <ul class="lesson-list">
        <li>🎮 Build games with Pygame</li>
        <li>🤖 Create AI and machine learning programs</li>
        <li>🌐 Build websites and web apps</li>
        <li>📊 Analyze data and create charts</li>
        <li>🔬 Run science experiments</li>
      </ul>

      <h3>Your First Python Program</h3>
      <p>Every coder starts here — the classic "Hello, World!" program:</p>
      <div class="code-block">print("Hello, World!")</div>
      <div class="output-preview">Hello, World!</div>

      <p>That's it! One line of code and Python prints a message to the screen. The <code>print()</code> function tells Python to display something.</p>

      <div class="lesson-box tip">
        <strong>🚀 Try It:</strong> Go to the Playground and type <code>print("Hello, [your name]!")</code> then click Run!
      </div>

      <h3>How Python Works</h3>
      <p>When you write Python code, the Python <strong>interpreter</strong> reads each line from top to bottom and executes the instructions. Think of it like giving step-by-step cooking instructions to a robot chef!</p>

      <div class="lesson-box warning">
        <strong>⚠️ Python is case-sensitive!</strong> <code>print</code> works, but <code>Print</code> or <code>PRINT</code> will give an error.
      </div>
    `
  },
  {
    id: "variables",
    title: "Variables & Data Types",
    emoji: "📦",
    level: "Beginner",
    color: "#06D6A0",
    xp: 25,
    content: `
      <h2>📦 Variables & Data Types</h2>
      <p>A <strong>variable</strong> is like a labeled box that stores information. You name the box and put something inside it. Later, you can open the box and use what's inside!</p>

      <h3>Creating Variables</h3>
      <div class="code-block">name = "Alex"
age = 13
height = 5.2
is_student = True</div>

      <h3>The 4 Basic Data Types</h3>
      <div class="data-types-grid">
        <div class="data-type-card">
          <div class="dt-icon">🔤</div>
          <div class="dt-name">String (str)</div>
          <div class="dt-desc">Text — always in quotes</div>
          <div class="dt-example">"Hello" or 'World'</div>
        </div>
        <div class="data-type-card">
          <div class="dt-icon">🔢</div>
          <div class="dt-name">Integer (int)</div>
          <div class="dt-desc">Whole numbers</div>
          <div class="dt-example">42, -7, 0, 100</div>
        </div>
        <div class="data-type-card">
          <div class="dt-icon">🔡</div>
          <div class="dt-name">Float</div>
          <div class="dt-desc">Decimal numbers</div>
          <div class="dt-example">3.14, -0.5, 99.9</div>
        </div>
        <div class="data-type-card">
          <div class="dt-icon">✅</div>
          <div class="dt-name">Boolean (bool)</div>
          <div class="dt-desc">True or False only</div>
          <div class="dt-example">True, False</div>
        </div>
      </div>

      <h3>Using Variables</h3>
      <div class="code-block">name = "Alex"
age = 13
print("My name is", name)
print("I am", age, "years old")
print("Next year I'll be", age + 1)</div>
      <div class="output-preview">My name is Alex
I am 13 years old
Next year I'll be 14</div>

      <h3>String Formatting (f-strings) ✨</h3>
      <p>A cleaner way to mix variables and text:</p>
      <div class="code-block">name = "Alex"
age = 13
print(f"My name is {name} and I am {age} years old!")</div>
      <div class="output-preview">My name is Alex and I am 13 years old!</div>

      <div class="lesson-box tip">
        <strong>💡 Naming Rules:</strong> Variable names can't start with a number, can't have spaces (use underscores like <code>my_name</code>), and are case-sensitive (<code>Age</code> ≠ <code>age</code>).
      </div>

      <h3>Checking Types</h3>
      <div class="code-block">x = 42
print(type(x))   # &lt;class 'int'&gt;
y = "hello"
print(type(y))   # &lt;class 'str'&gt;</div>
    `
  },
  {
    id: "operators",
    title: "Math & Operators",
    emoji: "➕",
    level: "Beginner",
    color: "#FF6B6B",
    xp: 20,
    content: `
      <h2>➕ Math & Operators</h2>
      <p>Python is a fantastic calculator! Let's explore all the ways you can do math and compare values.</p>

      <h3>Arithmetic Operators</h3>
      <table class="lesson-table">
        <tr><th>Operator</th><th>Name</th><th>Example</th><th>Result</th></tr>
        <tr><td>+</td><td>Addition</td><td>10 + 3</td><td>13</td></tr>
        <tr><td>-</td><td>Subtraction</td><td>10 - 3</td><td>7</td></tr>
        <tr><td>*</td><td>Multiplication</td><td>10 * 3</td><td>30</td></tr>
        <tr><td>/</td><td>Division</td><td>10 / 3</td><td>3.333...</td></tr>
        <tr><td>//</td><td>Floor Division</td><td>10 // 3</td><td>3</td></tr>
        <tr><td>%</td><td>Modulus (remainder)</td><td>10 % 3</td><td>1</td></tr>
        <tr><td>**</td><td>Exponent (power)</td><td>2 ** 8</td><td>256</td></tr>
      </table>

      <div class="code-block">score = 100
bonus = 25
total = score + bonus
print(f"Total score: {total}")   # 125

# Order of operations (PEMDAS applies!)
result = 2 + 3 * 4    # = 14, not 20
result2 = (2 + 3) * 4  # = 20</div>

      <h3>Comparison Operators</h3>
      <p>These return <code>True</code> or <code>False</code>:</p>
      <div class="code-block">x = 10
print(x == 10)   # True  (equals)
print(x != 5)    # True  (not equals)
print(x > 8)     # True  (greater than)
print(x < 5)     # False (less than)
print(x >= 10)   # True  (greater or equal)
print(x <= 9)    # False (less or equal)</div>

      <h3>Modulus — The Secret Weapon %</h3>
      <p>The % operator gives you the <strong>remainder</strong> after division. It's super useful for checking if a number is even or odd!</p>
      <div class="code-block">number = 7
if number % 2 == 0:
    print("Even number!")
else:
    print("Odd number!")  # This prints</div>

      <div class="lesson-box tip">
        <strong>🎮 Challenge:</strong> Write a program that calculates how many pizza slices each person gets if there are 28 slices and 6 people, AND how many slices are left over!
      </div>
    `
  },
  {
    id: "conditionals",
    title: "If / Else Statements",
    emoji: "🤔",
    level: "Beginner",
    color: "#A78BFA",
    xp: 30,
    content: `
      <h2>🤔 If / Else Statements</h2>
      <p>Computers make decisions using <strong>if/else</strong> statements — just like you do every day! "If it's raining, take an umbrella. Otherwise, wear sunglasses."</p>

      <h3>Basic If Statement</h3>
      <div class="code-block">temperature = 85

if temperature > 80:
    print("It's hot outside! 🌞")
    print("Drink lots of water!")</div>
      <div class="output-preview">It's hot outside! 🌞
Drink lots of water!</div>

      <div class="lesson-box warning">
        <strong>⚠️ Indentation Matters!</strong> Python uses spaces (4 spaces or 1 tab) to know which code belongs inside an if statement. This is called <strong>indentation</strong> and it's very important!
      </div>

      <h3>If / Else</h3>
      <div class="code-block">grade = 75

if grade >= 90:
    print("A — Excellent! 🏆")
elif grade >= 80:
    print("B — Great job! 👍")
elif grade >= 70:
    print("C — Not bad! 📚")
else:
    print("Keep studying! 💪")</div>
      <div class="output-preview">C — Not bad! 📚</div>

      <h3>Logical Operators: and, or, not</h3>
      <div class="code-block">age = 15
has_ticket = True

# Both must be True
if age >= 13 and has_ticket:
    print("You can enter the concert! 🎵")

# At least one must be True
if age < 5 or age > 65:
    print("Free admission!")

# Flips True to False and vice versa
if not has_ticket:
    print("You need to buy a ticket first.")</div>

      <h3>Nested If Statements</h3>
      <div class="code-block">weather = "sunny"
temperature = 72

if weather == "sunny":
    if temperature > 70:
        print("Perfect beach day! 🏖️")
    else:
        print("Sunny but cold — bring a jacket!")
else:
    print("Maybe stay inside today.")</div>
    `
  },
  {
    id: "loops",
    title: "Loops: For & While",
    emoji: "🔁",
    level: "Beginner",
    color: "#F97316",
    xp: 35,
    content: `
      <h2>🔁 Loops: For & While</h2>
      <p>Loops let you repeat code without writing it over and over again. Imagine if you had to write 100 <code>print</code> statements to count to 100 — no thanks! Loops do that automatically.</p>

      <h3>For Loops</h3>
      <p>A <strong>for loop</strong> repeats a set number of times:</p>
      <div class="code-block"># Count from 0 to 4
for i in range(5):
    print(f"Count: {i}")</div>
      <div class="output-preview">Count: 0
Count: 1
Count: 2
Count: 3
Count: 4</div>

      <div class="code-block"># range(start, stop, step)
for i in range(0, 11, 2):
    print(i, end=" ")</div>
      <div class="output-preview">0 2 4 6 8 10</div>

      <h3>Looping Through Lists</h3>
      <div class="code-block">fruits = ["apple", "banana", "cherry", "mango"]

for fruit in fruits:
    print(f"I love {fruit}! 🍎")</div>
      <div class="output-preview">I love apple! 🍎
I love banana! 🍎
I love cherry! 🍎
I love mango! 🍎</div>

      <h3>While Loops</h3>
      <p>A <strong>while loop</strong> keeps going as long as a condition is True:</p>
      <div class="code-block">countdown = 5

while countdown > 0:
    print(f"{countdown}... 🚀")
    countdown = countdown - 1

print("BLAST OFF! 🌟")</div>
      <div class="output-preview">5... 🚀
4... 🚀
3... 🚀
2... 🚀
1... 🚀
BLAST OFF! 🌟</div>

      <h3>Break & Continue</h3>
      <div class="code-block"># break: exit the loop early
for num in range(10):
    if num == 5:
        break    # Stop at 5
    print(num, end=" ")
# Output: 0 1 2 3 4

# continue: skip to next iteration
for num in range(10):
    if num % 2 == 0:
        continue  # Skip even numbers
    print(num, end=" ")
# Output: 1 3 5 7 9</div>

      <div class="lesson-box tip">
        <strong>⚠️ Infinite Loops:</strong> Make sure your while loop's condition eventually becomes False, or you'll be stuck forever! Always make sure something changes inside the loop.
      </div>
    `
  },
  {
    id: "functions",
    title: "Functions",
    emoji: "🧰",
    level: "Intermediate",
    color: "#14B8A6",
    xp: 40,
    content: `
      <h2>🧰 Functions</h2>
      <p>A <strong>function</strong> is a reusable block of code that does a specific job. Instead of writing the same code 10 times, write it once as a function and call it 10 times!</p>

      <h3>Defining a Function</h3>
      <div class="code-block">def say_hello():
    print("Hello there! 👋")
    print("Welcome to Python!")

# Call the function
say_hello()
say_hello()  # Call it again!</div>
      <div class="output-preview">Hello there! 👋
Welcome to Python!
Hello there! 👋
Welcome to Python!</div>

      <h3>Functions with Parameters</h3>
      <p><strong>Parameters</strong> are inputs you give to a function:</p>
      <div class="code-block">def greet(name, emoji="🌟"):
    print(f"Hello, {name}! {emoji}")

greet("Alex")           # Uses default emoji
greet("Sam", "🚀")     # Overrides the default
greet("Jordan", "🎮")</div>
      <div class="output-preview">Hello, Alex! 🌟
Hello, Sam! 🚀
Hello, Jordan! 🎮</div>

      <h3>Functions that Return Values</h3>
      <div class="code-block">def add_numbers(a, b):
    result = a + b
    return result

sum1 = add_numbers(5, 3)
sum2 = add_numbers(10, 20)
print(f"5 + 3 = {sum1}")
print(f"10 + 20 = {sum2}")</div>
      <div class="output-preview">5 + 3 = 8
10 + 20 = 30</div>

      <h3>A Real Example: Grade Calculator</h3>
      <div class="code-block">def get_letter_grade(score):
    if score >= 90:
        return "A 🏆"
    elif score >= 80:
        return "B 👍"
    elif score >= 70:
        return "C 📚"
    elif score >= 60:
        return "D 😬"
    else:
        return "F — Study harder! 💪"

scores = [95, 83, 71, 58, 100]
for score in scores:
    grade = get_letter_grade(score)
    print(f"Score {score}: {grade}")</div>

      <div class="lesson-box info">
        <strong>📋 DRY Principle:</strong> "Don't Repeat Yourself!" Functions help you write cleaner, shorter, and easier-to-fix code. Professional programmers love functions!
      </div>
    `
  },
  {
    id: "lists",
    title: "Lists",
    emoji: "📋",
    level: "Intermediate",
    color: "#EC4899",
    xp: 35,
    content: `
      <h2>📋 Lists</h2>
      <p>A <strong>list</strong> is like a container that holds multiple items in order. Think of a shopping list, a scoreboard, or a playlist — all collections of items in a specific order!</p>

      <h3>Creating Lists</h3>
      <div class="code-block">fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = ["Alex", 13, True, 3.14]
empty_list = []</div>

      <h3>Accessing Items (Indexing)</h3>
      <p>Lists start counting at <strong>0</strong> — not 1!</p>
      <div class="code-block">fruits = ["apple", "banana", "cherry", "mango"]
#          index:  0         1         2         3

print(fruits[0])   # apple  (first item)
print(fruits[2])   # cherry
print(fruits[-1])  # mango  (last item!)
print(fruits[-2])  # cherry (second from last)</div>

      <h3>Slicing Lists</h3>
      <div class="code-block">numbers = [10, 20, 30, 40, 50, 60]
print(numbers[1:4])   # [20, 30, 40]
print(numbers[:3])    # [10, 20, 30]
print(numbers[3:])    # [40, 50, 60]
print(numbers[::2])   # [10, 30, 50] (every 2nd)</div>

      <h3>Modifying Lists</h3>
      <div class="code-block">games = ["Minecraft", "Roblox", "Fortnite"]

# Add items
games.append("Among Us")      # Add to end
games.insert(1, "Terraria")   # Add at position 1

# Remove items
games.remove("Roblox")        # Remove by value
games.pop()                   # Remove last item
games.pop(0)                  # Remove first item

# Modify
games[0] = "Stardew Valley"   # Change an item

print(games)</div>

      <h3>Useful List Methods</h3>
      <div class="code-block">scores = [85, 92, 78, 95, 88, 76]

print(len(scores))      # 6  — how many items?
print(max(scores))      # 95 — highest score?
print(min(scores))      # 76 — lowest score?
print(sum(scores))      # 514 — total?
print(sorted(scores))   # sorted copy

scores.sort()           # sort in place
scores.reverse()        # flip the order
print(scores.count(95)) # how many 95s?</div>

      <div class="lesson-box tip">
        <strong>🎮 Mini Challenge:</strong> Create a list of your top 5 favorite movies, sort them alphabetically, and print them one by one with their position number (1, 2, 3...)!
      </div>
    `
  },
  {
    id: "dictionaries",
    title: "Dictionaries",
    emoji: "📖",
    level: "Intermediate",
    color: "#8B5CF6",
    xp: 40,
    content: `
      <h2>📖 Dictionaries</h2>
      <p>A <strong>dictionary</strong> stores data as <strong>key-value pairs</strong>. Like a real dictionary where you look up a word (key) to find its definition (value). Perfect for organized data!</p>

      <h3>Creating Dictionaries</h3>
      <div class="code-block">player = {
    "name": "Alex",
    "level": 15,
    "health": 100,
    "is_alive": True,
    "items": ["sword", "shield", "potion"]
}</div>

      <h3>Accessing Values</h3>
      <div class="code-block">player = {"name": "Alex", "level": 15, "health": 100}

print(player["name"])        # Alex
print(player["level"])       # 15

# Safer way — won't crash if key doesn't exist
print(player.get("name"))         # Alex
print(player.get("mana", 0))     # 0 (default)</div>

      <h3>Modifying Dictionaries</h3>
      <div class="code-block">player = {"name": "Alex", "level": 1}

# Update existing value
player["level"] = 2

# Add new key-value pair
player["score"] = 1500
player["badge"] = "🏆"

# Remove a key
del player["badge"]
removed = player.pop("score")

print(player)</div>

      <h3>Looping Through Dictionaries</h3>
      <div class="code-block">stats = {"speed": 8, "strength": 6, "magic": 9, "defense": 7}

# Loop through keys
for stat in stats:
    print(stat)

# Loop through key-value pairs (most useful!)
for stat, value in stats.items():
    bar = "█" * value
    print(f"{stat:10} {bar} ({value}/10)")</div>
      <div class="output-preview">speed      ████████ (8/10)
strength   ██████ (6/10)
magic      █████████ (9/10)
defense    ███████ (7/10)</div>

      <h3>Nested Dictionaries</h3>
      <div class="code-block">school = {
    "name": "Python Academy",
    "students": {
        "Alex": {"grade": "A", "age": 13},
        "Sam": {"grade": "B", "age": 14}
    }
}

print(school["students"]["Alex"]["grade"])  # A</div>
    `
  },
  {
    id: "strings",
    title: "String Methods",
    emoji: "🔤",
    level: "Intermediate",
    color: "#0EA5E9",
    xp: 30,
    content: `
      <h2>🔤 String Methods</h2>
      <p>Strings have <strong>tons</strong> of built-in superpowers called <strong>methods</strong>. Let's explore the most useful ones!</p>

      <h3>Basic String Operations</h3>
      <div class="code-block">name = "  Python Coding  "

print(name.upper())       # "  PYTHON CODING  "
print(name.lower())       # "  python coding  "
print(name.strip())       # "Python Coding" (removes spaces)
print(name.title())       # "  Python Coding  "

# String length
print(len("Hello"))       # 5</div>

      <h3>Searching in Strings</h3>
      <div class="code-block">sentence = "Python is awesome and Python is fun!"

print(sentence.find("Python"))      # 0  (first position)
print(sentence.count("Python"))     # 2  (how many times?)
print("awesome" in sentence)        # True
print(sentence.startswith("Py"))    # True
print(sentence.endswith("!"))       # True</div>

      <h3>Replacing & Splitting</h3>
      <div class="code-block">text = "I love cats and cats love me"
new_text = text.replace("cats", "dogs")
print(new_text)  # I love dogs and dogs love me

# Split into a list of words
words = "apple,banana,cherry,mango"
fruit_list = words.split(",")
print(fruit_list)  # ['apple', 'banana', 'cherry', 'mango']

# Join a list into a string
joined = " - ".join(fruit_list)
print(joined)  # apple - banana - cherry - mango</div>

      <h3>F-Strings (Formatted Strings)</h3>
      <div class="code-block">name = "Alex"
score = 1250
level = 7

# Old way (messy)
print("Player " + name + " scored " + str(score))

# f-string way (clean!)
print(f"Player {name} scored {score} points at level {level}")

# Math in f-strings
print(f"Double score: {score * 2}")
print(f"Average: {score / level:.1f}")  # 1 decimal place</div>

      <h3>String Indexing (Same as Lists!)</h3>
      <div class="code-block">word = "Python"
#      index: 0 1 2 3 4 5

print(word[0])     # P
print(word[-1])    # n (last letter)
print(word[0:3])   # Pyt (slicing)
print(word[::-1])  # nohtyP (reversed!)</div>
    `
  },
  {
    id: "projects",
    title: "Mini Projects",
    emoji: "🚀",
    level: "Intermediate",
    color: "#F59E0B",
    xp: 50,
    content: `
      <h2>🚀 Mini Projects</h2>
      <p>Time to put it all together! These mini projects use everything you've learned. Try them in the Playground!</p>

      <h3>Project 1: 🔢 Number Guessing Game</h3>
      <div class="code-block">import random

secret = random.randint(1, 100)
attempts = 0
max_attempts = 7

print("🎮 Number Guessing Game!")
print(f"I'm thinking of a number between 1 and 100.")
print(f"You have {max_attempts} guesses. Good luck!")

while attempts < max_attempts:
    guess = int(input("Your guess: "))
    attempts += 1
    remaining = max_attempts - attempts
    
    if guess == secret:
        print(f"🎉 You got it in {attempts} guesses!")
        break
    elif guess < secret:
        print(f"Too low! 📉 ({remaining} guesses left)")
    else:
        print(f"Too high! 📈 ({remaining} guesses left)")
else:
    print(f"Game over! The number was {secret}. 😢")</div>

      <h3>Project 2: 📚 Simple Quiz Game</h3>
      <div class="code-block">questions = [
    {"q": "What is 7 x 8?", "a": "56"},
    {"q": "What color is the sky?", "a": "blue"},
    {"q": "How many planets are in our solar system?", "a": "8"},
]

score = 0
print("🧠 Quiz Time! Answer all questions.\n")

for i, item in enumerate(questions, 1):
    print(f"Question {i}: {item['q']}")
    answer = input("Your answer: ").lower().strip()
    
    if answer == item["a"]:
        print("✅ Correct!\n")
        score += 1
    else:
        print(f"❌ Wrong! The answer was: {item['a']}\n")

print(f"Final Score: {score}/{len(questions)} 🏆")</div>

      <h3>Project 3: 🛒 Shopping Cart</h3>
      <div class="code-block">cart = {}
menu = {
    "burger": 5.99,
    "pizza": 8.99,
    "soda": 1.99,
    "fries": 2.99,
    "salad": 6.99
}

print("🍔 Welcome to PyBurger!")
print("Items:", ", ".join(menu.keys()))

while True:
    item = input("\nAdd item (or 'done'): ").lower()
    if item == "done":
        break
    elif item in menu:
        cart[item] = cart.get(item, 0) + 1
        print(f"Added {item} (\${menu[item]:.2f})")
    else:
        print("Item not found! Try again.")

print("\n🧾 Your Order:")
total = 0
for item, qty in cart.items():
    subtotal = menu[item] * qty
    total += subtotal
    print(f"  {item} x{qty} = \${subtotal:.2f}")

print(f"\nTotal: \${total:.2f}")
print("Thanks for eating at PyBurger! 🎉")</div>

      <div class="lesson-box info">
        <strong>🏆 Achievement Unlocked:</strong> If you can run all 3 projects, you've mastered the basics of Python! You're officially a Python coder. The next step is learning about classes, files, and real libraries!
      </div>
    `
  },

  // ── NEW LESSONS ────────────────────────────────────────────

  {
    id: "how_computers_think",
    title: "How Computers Think",
    emoji: "🧠",
    level: "Beginner",
    color: "#60A5FA",
    xp: 15,
    content: `
      <h2>🧠 How Computers Think</h2>
      <p>Before diving deeper into Python, it helps to understand <em>how</em> a computer actually processes your code. Computers aren't magic — they follow rules, one tiny step at a time!</p>

      <div class="lesson-box info">
        <strong>💡 Big Idea:</strong> A computer can only do a few basic things: store data, do math, compare values, and jump around in a list of instructions. Everything else — games, websites, AI — is just a clever combination of those simple steps!
      </div>

      <h3>The CPU: Your Computer's Brain</h3>
      <p>The <strong>CPU (Central Processing Unit)</strong> is the chip that actually runs your code. Modern CPUs can perform <em>billions</em> of operations per second. When you run a Python program, the Python interpreter translates your human-readable code into instructions the CPU understands.</p>

      <h3>Memory: Short-Term vs Long-Term</h3>
      <div class="data-types-grid">
        <div class="data-type-card">
          <div class="dt-icon">⚡</div>
          <div class="dt-name">RAM (Short-Term)</div>
          <div class="dt-desc">Fast, temporary. Holds your variables while the program runs. Gone when you close the program.</div>
        </div>
        <div class="data-type-card">
          <div class="dt-icon">💾</div>
          <div class="dt-name">Storage (Long-Term)</div>
          <div class="dt-desc">Slow, permanent. Your hard drive or SSD. Holds files, even after you turn off the computer.</div>
        </div>
      </div>

      <h3>Bits and Bytes — The Language of Computers</h3>
      <p>Computers only understand <strong>1s and 0s</strong> (called <strong>binary</strong>). A single 1 or 0 is called a <strong>bit</strong>. Eight bits make a <strong>byte</strong>. Your variables in Python are stored as bytes in RAM!</p>
      <div class="code-block"># The letter "A" is stored as the number 65 in binary:
# 0 1 0 0 0 0 0 1
# Python can show you this:
print(ord("A"))    # 65  — the number behind the letter
print(bin(65))     # 0b1000001 — the binary representation
print(chr(65))     # A   — convert number back to character</div>
      <div class="output-preview">65
0b1000001
A</div>

      <h3>Sequential Execution</h3>
      <p>By default, Python reads your code <strong>top to bottom, one line at a time</strong>. This is called <em>sequential execution</em>. Later you'll learn how to make Python skip lines (conditions) or repeat lines (loops).</p>
      <div class="code-block"># Python runs these EXACTLY in order:
print("Step 1: Start the program")
x = 10
x = x + 5
print("Step 2: x is now", x)
print("Step 3: Done!")</div>
      <div class="output-preview">Step 1: Start the program
Step 2: x is now 15
Step 3: Done!</div>

      <h3>Errors — When Computers Get Confused</h3>
      <p>When Python doesn't understand your code, it gives you an <strong>error message</strong>. Don't panic! Errors are clues, not failures. Every programmer deals with errors every single day.</p>
      <div class="code-block"># Common error types:
# SyntaxError   — you wrote something Python can't understand
# NameError     — you used a variable before creating it
# TypeError     — you mixed incompatible types (like adding a number to a word)
# ZeroDivisionError — you tried to divide by zero

# Example:
# print(hello)   ← NameError: name 'hello' is not defined
# 10 / 0         ← ZeroDivisionError</div>

      <div class="lesson-box tip">
        <strong>🔍 Pro Tip:</strong> Always read error messages carefully! They tell you the <em>type</em> of error and the <em>line number</em> where it happened. That's like a treasure map to fixing your bug!
      </div>
    `
  },

  {
    id: "user_input",
    title: "Getting User Input",
    emoji: "⌨️",
    level: "Beginner",
    color: "#34D399",
    xp: 25,
    content: `
      <h2>⌨️ Getting User Input</h2>
      <p>So far, your programs have only shown output. But great programs are <em>interactive</em> — they ask questions and respond based on what the user types. Let's make your programs talk back!</p>

      <h3>The input() Function</h3>
      <p>The <code>input()</code> function pauses your program and waits for the user to type something and press Enter. Whatever they type comes back as a <strong>string</strong>.</p>
      <div class="code-block">name = input("What is your name? ")
print(f"Nice to meet you, {name}! 👋")</div>
      <div class="output-preview">What is your name? Alex
Nice to meet you, Alex! 👋</div>

      <h3>Important: input() Always Returns a String</h3>
      <p>Even if the user types a number, <code>input()</code> gives it back as text. You need to <strong>convert</strong> it if you want to do math!</p>
      <div class="code-block"># WRONG — this will crash!
# age = input("How old are you? ")
# next_year = age + 1   ← TypeError: can't add int to str

# CORRECT — convert to integer first
age = int(input("How old are you? "))
next_year = age + 1
print(f"Next year you'll be {next_year}!")</div>

      <h3>Converting Input Types</h3>
      <table class="lesson-table">
        <tr><th>Function</th><th>Converts To</th><th>Example</th></tr>
        <tr><td>int()</td><td>Whole number</td><td>int("42") → 42</td></tr>
        <tr><td>float()</td><td>Decimal number</td><td>float("3.14") → 3.14</td></tr>
        <tr><td>str()</td><td>Text string</td><td>str(99) → "99"</td></tr>
        <tr><td>bool()</td><td>True / False</td><td>bool(0) → False</td></tr>
      </table>

      <h3>A Simple Interactive Program</h3>
      <div class="code-block">print("🎂 Birthday Calculator")
print("=" * 30)

name = input("Enter your name: ")
birth_year = int(input("Enter your birth year: "))
current_year = 2025

age = current_year - birth_year
days_alive = age * 365

print()
print(f"Hello, {name}!")
print(f"You are about {age} years old.")
print(f"That's roughly {days_alive:,} days alive!")
print(f"And about {days_alive * 24:,} hours!")
print("That's a lot of hours! 🎉")</div>
      <div class="output-preview">🎂 Birthday Calculator
==============================
Enter your name: Jordan
Enter your birth year: 2011

Hello, Jordan!
You are about 14 years old.
That's roughly 5,110 days alive!
And about 122,640 hours!
That's a lot of hours! 🎉</div>

      <h3>Validating Input</h3>
      <p>What if the user types something unexpected? Good programs handle this gracefully!</p>
      <div class="code-block">answer = input("Are you a student? (yes/no): ")
answer = answer.lower().strip()   # Clean it up first

if answer == "yes" or answer == "y":
    print("Welcome, student! 📚")
elif answer == "no" or answer == "n":
    print("Welcome, guest! 👋")
else:
    print("I didn't understand that, but welcome anyway! 😄")</div>

      <div class="lesson-box tip">
        <strong>🚀 Try It:</strong> In the Playground, the snippet menu has examples you can modify. Build a program that asks for someone's name, favorite color, and favorite number, then tells them something fun about their choices!
      </div>
    `
  },

  {
    id: "conditionals_deep",
    title: "Conditionals Deep Dive",
    emoji: "🔀",
    level: "Beginner",
    color: "#C084FC",
    xp: 30,
    content: `
      <h2>🔀 Conditionals Deep Dive</h2>
      <p>You've seen basic if/else. Now let's go deeper! Conditionals are the decision-making powerhouse of programming. Master them and you can handle any situation your program faces.</p>

      <h3>The Full If / Elif / Else Chain</h3>
      <p><code>elif</code> means "else if" — it lets you check multiple conditions in order. Python checks each one and runs the FIRST one that's True, then skips the rest.</p>
      <div class="code-block">score = 87

if score == 100:
    print("🌟 Perfect score! Legendary!")
elif score >= 90:
    print("🏆 A — Excellent work!")
elif score >= 80:
    print("👍 B — Great job!")
elif score >= 70:
    print("📚 C — Good effort!")
elif score >= 60:
    print("😬 D — You passed, barely...")
else:
    print("💪 F — Let's study together!")</div>
      <div class="output-preview">👍 B — Great job!</div>

      <div class="lesson-box warning">
        <strong>⚠️ Order matters!</strong> Python checks conditions <em>top to bottom</em> and stops at the first True one. If you put <code>score >= 60</code> first, everyone with 60+ would get the same message!
      </div>

      <h3>Comparison Operators — Full Reference</h3>
      <div class="code-block">x = 10
y = 20

print(x == y)    # False — Equal to
print(x != y)    # True  — Not equal to
print(x < y)     # True  — Less than
print(x > y)     # False — Greater than
print(x <= 10)   # True  — Less than OR equal to
print(x >= 10)   # True  — Greater than OR equal to

# You can chain comparisons! (Very Pythonic)
age = 15
print(13 <= age <= 17)   # True — is age a teenager?</div>

      <h3>Logical Operators in Depth</h3>
      <div class="code-block">temperature = 75
is_sunny = True
has_sunscreen = False

# AND — both conditions must be True
if temperature > 70 and is_sunny:
    print("Great beach weather!")

# OR — at least one must be True
if temperature > 90 or temperature < 32:
    print("Extreme weather warning!")

# NOT — flips True to False
if not has_sunscreen:
    print("Don't forget sunscreen! ☀️")

# Combining them — use parentheses for clarity
if (temperature > 70 and is_sunny) and not has_sunscreen:
    print("Nice day but grab sunscreen first!")</div>
      <div class="output-preview">Great beach weather!
Don't forget sunscreen! ☀️
Nice day but grab sunscreen first!</div>

      <h3>Truthy and Falsy Values</h3>
      <p>In Python, almost anything can be used as a condition — not just True/False! Python treats certain values as "falsy" (acts like False) and everything else as "truthy".</p>
      <div class="code-block"># FALSY values (act like False):
# False, 0, 0.0, "", [], {}, None

# TRUTHY values (act like True):
# True, any non-zero number, any non-empty string/list

name = ""
if name:
    print(f"Hello, {name}!")
else:
    print("You didn't enter a name!")  # This runs

items = []
if not items:
    print("Your cart is empty! 🛒")   # This runs

score = 0
if score:
    print("You have points!")
else:
    print("No points yet!")            # This runs</div>

      <h3>One-Line Conditionals (Ternary)</h3>
      <p>For simple decisions, Python lets you write an if/else in a single line:</p>
      <div class="code-block">age = 16

# Syntax: value_if_true if condition else value_if_false
status = "adult" if age >= 18 else "minor"
print(f"Status: {status}")   # Status: minor

# Great for assigning variables:
weather = "rainy"
outfit = "🧥 raincoat" if weather == "rainy" else "😎 t-shirt"
print(f"Wear: {outfit}")</div>

      <div class="lesson-box tip">
        <strong>🎮 Challenge:</strong> Write a program that asks the user for the temperature and whether it's raining (yes/no), then recommends what to wear using if/elif/else. Try to cover at least 5 different weather combinations!
      </div>
    `
  },

  {
    id: "for_loops_deep",
    title: "For Loops — Full Guide",
    emoji: "🔄",
    level: "Beginner",
    color: "#FB923C",
    xp: 35,
    content: `
      <h2>🔄 For Loops — Full Guide</h2>
      <p>For loops are one of the most powerful tools in programming. Once you truly master them, you'll realize you can automate almost anything with just a few lines of code!</p>

      <h3>The range() Function — In Depth</h3>
      <p><code>range()</code> generates a sequence of numbers. It's the engine behind most for loops.</p>
      <div class="code-block"># range(stop) — starts at 0
for i in range(5):
    print(i, end=" ")     # 0 1 2 3 4

print()

# range(start, stop) — you choose the start
for i in range(3, 8):
    print(i, end=" ")     # 3 4 5 6 7

print()

# range(start, stop, step) — count by any amount
for i in range(0, 20, 4):
    print(i, end=" ")     # 0 4 8 12 16

print()

# Counting BACKWARDS with a negative step
for i in range(10, 0, -1):
    print(i, end=" ")     # 10 9 8 7 6 5 4 3 2 1</div>
      <div class="output-preview">0 1 2 3 4
3 4 5 6 7
0 4 8 12 16
10 9 8 7 6 5 4 3 2 1</div>

      <h3>Looping Through Strings</h3>
      <p>Strings are sequences too — you can loop through every character!</p>
      <div class="code-block">word = "PYTHON"

for letter in word:
    print(letter, end="-")
print()   # New line at end

# Count vowels in a word
text = "programming is awesome"
vowels = "aeiou"
count = 0
for char in text:
    if char in vowels:
        count += 1
print(f"Found {count} vowels in '{text}'")</div>
      <div class="output-preview">P-Y-T-H-O-N-
Found 8 vowels in 'programming is awesome'</div>

      <h3>enumerate() — Loop with Index Numbers</h3>
      <p><code>enumerate()</code> gives you both the position AND the value as you loop:</p>
      <div class="code-block">subjects = ["Math", "Science", "English", "Art", "PE"]

# Without enumerate (old way):
for i in range(len(subjects)):
    print(f"{i+1}. {subjects[i]}")

print()

# With enumerate (better way!):
for num, subject in enumerate(subjects, start=1):
    print(f"{num}. {subject}")</div>
      <div class="output-preview">1. Math
2. Science
3. English
4. Art
5. PE</div>

      <h3>Nested For Loops</h3>
      <p>You can put a loop inside a loop! The inner loop runs <em>completely</em> for every single iteration of the outer loop.</p>
      <div class="code-block"># Multiplication table
for row in range(1, 6):
    for col in range(1, 6):
        product = row * col
        print(f"{product:4}", end="")
    print()   # New line after each row</div>
      <div class="output-preview">   1   2   3   4   5
   2   4   6   8  10
   3   6   9  12  15
   4   8  12  16  20
   5  10  15  20  25</div>

      <h3>Loop Accumulation Pattern</h3>
      <p>One of the most common patterns: start with a value and build it up inside the loop.</p>
      <div class="code-block"># Sum all numbers 1 through 100
total = 0
for num in range(1, 101):
    total += num    # same as: total = total + num
print(f"Sum of 1–100 = {total}")   # 5050

# Build a string character by character
result = ""
word = "Python"
for char in word:
    result = result + char + "-"
print(result)   # P-y-t-h-o-n-

# Collect even numbers into a list
evens = []
for n in range(1, 21):
    if n % 2 == 0:
        evens.append(n)
print(evens)</div>
      <div class="output-preview">Sum of 1–100 = 5050
P-y-t-h-o-n-
[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]</div>

      <div class="lesson-box tip">
        <strong>🎮 Challenge:</strong> Use a nested for loop to print a triangle of stars like this:<br/>
        <code>*</code><br/>
        <code>**</code><br/>
        <code>***</code><br/>
        <code>****</code><br/>
        <code>*****</code>
      </div>
    `
  },

  {
    id: "while_loops_deep",
    title: "While Loops — Full Guide",
    emoji: "🌀",
    level: "Beginner",
    color: "#2DD4BF",
    xp: 35,
    content: `
      <h2>🌀 While Loops — Full Guide</h2>
      <p>While loops are perfect when you don't know <em>exactly</em> how many times you need to repeat something. They keep going until a condition is False — which makes them great for games, menus, and waiting for valid input!</p>

      <h3>Basic While Loop Structure</h3>
      <div class="code-block"># Structure:
# while CONDITION:
#     do stuff
#     (make sure condition eventually becomes False!)

count = 1
while count <= 5:
    print(f"Count is: {count}")
    count += 1    # IMPORTANT: update the variable!
print("Loop finished!")</div>
      <div class="output-preview">Count is: 1
Count is: 2
Count is: 3
Count is: 4
Count is: 5
Loop finished!</div>

      <div class="lesson-box warning">
        <strong>⚠️ Infinite Loop Danger!</strong> If your condition never becomes False, the program runs forever and freezes! Always make sure something inside your loop changes the condition variable. Press Ctrl+C to escape an infinite loop in the terminal.
      </div>

      <h3>While True — The Game Loop Pattern</h3>
      <p><code>while True:</code> runs forever until you explicitly <code>break</code> out. This is the classic pattern for menus and games!</p>
      <div class="code-block">print("🎮 Simple Menu")
print("=" * 20)

while True:
    print("\n1. Start Game")
    print("2. View High Scores")
    print("3. Settings")
    print("4. Quit")
    
    choice = input("Choose (1-4): ")
    
    if choice == "1":
        print("🚀 Starting game...")
    elif choice == "2":
        print("📊 High Scores: Alex-1000, Sam-850")
    elif choice == "3":
        print("⚙️ Settings menu...")
    elif choice == "4":
        print("Thanks for playing! 👋")
        break    # Exit the loop!
    else:
        print("❌ Invalid choice. Try again!")</div>

      <h3>Input Validation Loop</h3>
      <p>One of the most practical uses of while loops — keep asking until you get a valid answer!</p>
      <div class="code-block">while True:
    age = input("Enter your age (1-120): ")
    
    if age.isdigit():           # Check if it's a number
        age = int(age)
        if 1 <= age <= 120:
            break               # Valid! Exit the loop.
        else:
            print("❌ Age must be between 1 and 120!")
    else:
        print("❌ Please enter a number, not text!")

print(f"✅ Age recorded: {age}")</div>

      <h3>Comparing For vs While</h3>
      <table class="lesson-table">
        <tr><th>Use For Loop When...</th><th>Use While Loop When...</th></tr>
        <tr><td>You know how many times to repeat</td><td>You don't know how many times</td></tr>
        <tr><td>Looping through a list or string</td><td>Waiting for user input</td></tr>
        <tr><td>Counting up or down</td><td>Running a game or menu</td></tr>
        <tr><td>range() makes sense</td><td>Condition depends on what happens inside</td></tr>
      </table>

      <h3>While with Break and Continue</h3>
      <div class="code-block">number = 0
while number < 20:
    number += 1
    
    if number % 2 == 0:
        continue    # Skip even numbers, go to next iteration
    
    if number > 15:
        break       # Stop when we pass 15
    
    print(number, end=" ")</div>
      <div class="output-preview">1 3 5 7 9 11 13 15</div>

      <div class="lesson-box tip">
        <strong>🎮 Challenge:</strong> Build a number guessing game! The computer picks a secret number between 1 and 50. The player keeps guessing until they get it right. Tell them "too high" or "too low" and count their attempts!
      </div>
    `
  },

  {
    id: "nested_logic",
    title: "Nested Logic & Complex Conditions",
    emoji: "🧩",
    level: "Beginner",
    color: "#F472B6",
    xp: 30,
    content: `
      <h2>🧩 Nested Logic & Complex Conditions</h2>
      <p>Real programs need to handle complex situations — multiple things happening at once, decisions within decisions, conditions that depend on each other. This lesson ties everything together!</p>

      <h3>Nested If Statements</h3>
      <p>You can put an if statement <em>inside</em> another if statement. This is called <strong>nesting</strong>. Use it when the second decision only makes sense after the first one passes.</p>
      <div class="code-block">has_ticket = True
age = 12
vip = False

if has_ticket:
    print("✅ Ticket found!")
    if age >= 13:
        if vip:
            print("🌟 VIP access granted — front row!")
        else:
            print("🎵 General admission — enjoy the show!")
    else:
        print("⚠️ Sorry, this show is for ages 13+")
else:
    print("❌ No ticket — you can't enter!")</div>
      <div class="output-preview">✅ Ticket found!
⚠️ Sorry, this show is for ages 13+</div>

      <h3>If Statements Inside Loops</h3>
      <p>Combining loops with conditions is where the real power is! This combo lets you filter, search, and process data.</p>
      <div class="code-block">temperatures = [72, 85, 91, 68, 77, 103, 55, 80]

hot_days = 0
cold_days = 0
perfect_days = 0

for temp in temperatures:
    if temp >= 90:
        hot_days += 1
        print(f"🌡️ {temp}°F — Too hot! Stay inside.")
    elif temp <= 60:
        cold_days += 1
        print(f"🥶 {temp}°F — Brrr! Grab a jacket.")
    else:
        perfect_days += 1
        print(f"😊 {temp}°F — Perfect weather!")

print(f"\nSummary:")
print(f"  Hot days:     {hot_days}")
print(f"  Cold days:    {cold_days}")
print(f"  Perfect days: {perfect_days}")</div>
      <div class="output-preview">😊 72°F — Perfect weather!
🌡️ 85°F — Too hot! Stay inside.
🌡️ 91°F — Too hot! Stay inside.
😊 68°F — Perfect weather!
😊 77°F — Perfect weather!
🌡️ 103°F — Too hot! Stay inside.
🥶 55°F — Brrr! Grab a jacket.
😊 80°F — Perfect weather!

Summary:
  Hot days:     3
  Cold days:    1
  Perfect days: 4</div>

      <h3>Searching with Loops and Conditions</h3>
      <div class="code-block">students = [
    {"name": "Alex",   "grade": 92},
    {"name": "Sam",    "grade": 78},
    {"name": "Jordan", "grade": 95},
    {"name": "Taylor", "grade": 65},
    {"name": "Morgan", "grade": 88},
]

# Find students with A grades (90+)
print("🏆 Honor Roll:")
for student in students:
    if student["grade"] >= 90:
        print(f"  ★ {student['name']} — {student['grade']}")

# Find the highest grade
best_score = 0
best_student = ""
for student in students:
    if student["grade"] > best_score:
        best_score = student["grade"]
        best_student = student["name"]

print(f"\n🥇 Top student: {best_student} with {best_score}!")</div>
      <div class="output-preview">🏆 Honor Roll:
  ★ Alex — 92
  ★ Jordan — 95

🥇 Top student: Jordan with 95!</div>

      <h3>Flag Variables</h3>
      <p>A <strong>flag</strong> is a boolean variable that tracks whether something has happened. Very useful pattern!</p>
      <div class="code-block">numbers = [4, 8, 15, 16, 23, 42, 7, 3]
target = 42

found = False    # Our flag starts as False

for num in numbers:
    if num == target:
        found = True
        break    # No need to keep searching

if found:
    print(f"✅ Found {target} in the list!")
else:
    print(f"❌ {target} is not in the list.")</div>

      <div class="lesson-box tip">
        <strong>🎮 Challenge:</strong> Create a list of 10 mixed numbers. Write code that loops through and prints each number, labeling it as "even" or "odd", "positive" or "negative". At the end, print counts for each category!
      </div>
    `
  },

  {
    id: "lists_deep",
    title: "Lists — Advanced Operations",
    emoji: "📝",
    level: "Beginner",
    color: "#A78BFA",
    xp: 35,
    content: `
      <h2>📝 Lists — Advanced Operations</h2>
      <p>Lists are the workhorse of Python. You've learned the basics — now let's unlock their full power with slicing, sorting, list comprehensions, and more!</p>

      <h3>List Slicing — Cutting Out Sections</h3>
      <p>Slicing lets you grab a chunk of a list without modifying the original. Syntax: <code>list[start:stop:step]</code></p>
      <div class="code-block">nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
#  index: 0   1   2   3   4   5   6   7   8   9

print(nums[2:6])      # [30, 40, 50, 60]  — items 2 through 5
print(nums[:4])       # [10, 20, 30, 40]  — first 4
print(nums[6:])       # [70, 80, 90, 100] — from index 6 to end
print(nums[-3:])      # [80, 90, 100]     — last 3 items
print(nums[::2])      # [10, 30, 50, 70, 90] — every other
print(nums[::-1])     # [100, 90, ..., 10] — reversed!</div>

      <h3>Sorting Lists</h3>
      <div class="code-block">scores = [85, 42, 97, 61, 78, 53, 90]

# sorted() — returns a NEW sorted list (original unchanged)
low_to_high = sorted(scores)
high_to_low = sorted(scores, reverse=True)
print("Original: ", scores)
print("Ascending:", low_to_high)
print("Descending:", high_to_low)

# .sort() — sorts the original list IN PLACE
names = ["Charlie", "Alice", "Bob", "Diana"]
names.sort()
print(names)   # ['Alice', 'Bob', 'Charlie', 'Diana']

# Sort strings by length
names.sort(key=len)
print(names)   # ['Bob', 'Alice', 'Diana', 'Charlie']</div>

      <h3>List Comprehensions — The Pythonic Superpower ⚡</h3>
      <p>A list comprehension creates a new list in one line. It's like a for loop and if statement combined into a compact, elegant expression!</p>
      <div class="code-block"># Regular for loop to make a list:
squares_old = []
for x in range(1, 6):
    squares_old.append(x ** 2)

# List comprehension — same thing, one line!
squares = [x ** 2 for x in range(1, 6)]
print(squares)   # [1, 4, 9, 16, 25]

# With a filter condition:
evens = [x for x in range(1, 21) if x % 2 == 0]
print(evens)     # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# Transform strings:
fruits = ["apple", "banana", "cherry"]
upper_fruits = [f.upper() for f in fruits]
print(upper_fruits)  # ['APPLE', 'BANANA', 'CHERRY']

# Long words only:
words = ["cat", "elephant", "dog", "rhinoceros", "bee"]
long_words = [w for w in words if len(w) > 4]
print(long_words)    # ['elephant', 'rhinoceros']</div>

      <h3>Useful Built-in List Functions</h3>
      <div class="code-block">data = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]

print(f"Count:   {len(data)}")        # 11
print(f"Sum:     {sum(data)}")        # 44
print(f"Max:     {max(data)}")        # 9
print(f"Min:     {min(data)}")        # 1
print(f"Average: {sum(data)/len(data):.2f}")  # 4.00

# Check membership
print(9 in data)      # True
print(7 in data)      # False
print(7 not in data)  # True

# Count specific value
print(data.count(5))  # 3 — appears 3 times

# Find position
print(data.index(9))  # 5 — first occurrence at index 5</div>

      <h3>2D Lists — Lists of Lists</h3>
      <p>You can store lists inside lists to make grids, tables, or game boards!</p>
      <div class="code-block"># Tic-Tac-Toe board
board = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    [" ", " ", "X"]
]

# Print the board nicely
for row in board:
    print("|".join(row))
    print("-----")

# Access a specific cell: [row][column]
print(board[0][2])   # X — top right
print(board[2][0])   # " " — bottom left (empty)</div>

      <div class="lesson-box tip">
        <strong>🎮 Challenge:</strong> Create a list of your 5 favorite songs. Sort them alphabetically, then reverse them. Use a list comprehension to make a new list of only the songs whose titles are longer than 6 characters. Print both lists!
      </div>
    `
  },

  {
    id: "type_conversion",
    title: "Type Conversion & Casting",
    emoji: "🔄",
    level: "Beginner",
    color: "#FBBF24",
    xp: 20,
    content: `
      <h2>🔄 Type Conversion & Casting</h2>
      <p>Python variables have types (int, float, str, bool). Sometimes you need to change a value from one type to another — this is called <strong>type conversion</strong> or <strong>casting</strong>. It's an essential skill for handling user input and building real programs!</p>

      <h3>Why Type Conversion Matters</h3>
      <div class="code-block"># This CRASHES — can't add string and int!
# age = input("Age: ")
# adult_age = age + 18   ← TypeError

# This WORKS — convert first
age_str = "15"          # A string
age_int = int(age_str)  # Now it's an integer
print(age_int + 3)      # 18 ✅</div>

      <h3>The Four Main Conversions</h3>
      <div class="code-block"># str → int
num = int("42")          # 42
neg = int("-7")          # -7

# str → float
pi = float("3.14")       # 3.14
price = float("9.99")    # 9.99

# number → str
text = str(100)          # "100"
label = str(3.14)        # "3.14"

# anything → bool
print(bool(0))           # False
print(bool(1))           # True
print(bool(""))          # False (empty string)
print(bool("hello"))     # True (non-empty)
print(bool([]))          # False (empty list)
print(bool([1,2,3]))     # True (non-empty list)</div>

      <h3>Checking Types Before Converting</h3>
      <div class="code-block"># .isdigit() checks if a string is all numbers
user_input = "42"
if user_input.isdigit():
    number = int(user_input)
    print(f"Got number: {number}")
else:
    print("That's not a number!")

# type() tells you what type something is
x = 42
y = 3.14
z = "hello"

print(type(x))    # &lt;class 'int'&gt;
print(type(y))    # &lt;class 'float'&gt;
print(type(z))    # &lt;class 'str'&gt;

# isinstance() checks type — returns True/False
print(isinstance(x, int))    # True
print(isinstance(y, float))  # True
print(isinstance(z, int))    # False</div>

      <h3>Implicit vs Explicit Conversion</h3>
      <div class="code-block"># IMPLICIT — Python converts automatically (be careful!)
result = 10 + 3.0    # int + float → Python makes it float
print(result)        # 13.0
print(type(result))  # &lt;class 'float'&gt;

# int + int = int
print(type(10 + 3))  # &lt;class 'int'&gt;

# EXPLICIT — you convert on purpose
x = 7 / 2           # Division always gives float
print(x)             # 3.5
y = 7 // 2          # Floor division gives int
print(y)             # 3
z = int(7 / 2)      # Explicit cast to int
print(z)             # 3</div>

      <h3>A Practical Example: Calculator</h3>
      <div class="code-block">print("🧮 Simple Calculator")

num1 = float(input("Enter first number: "))
op   = input("Operation (+, -, *, /): ")
num2 = float(input("Enter second number: "))

if op == "+":
    result = num1 + num2
elif op == "-":
    result = num1 - num2
elif op == "*":
    result = num1 * num2
elif op == "/" and num2 != 0:
    result = num1 / num2
else:
    result = None

if result is not None:
    print(f"Answer: {num1} {op} {num2} = {result}")
else:
    print("❌ Invalid operation or can't divide by zero!")</div>

      <div class="lesson-box tip">
        <strong>💡 Remember:</strong> When in doubt, convert explicitly! It's always better to be clear about types than to let Python guess and get a confusing error.
      </div>
    `
  },

  {
    id: "scope_variables",
    title: "Variable Scope",
    emoji: "🔭",
    level: "Intermediate",
    color: "#F87171",
    xp: 25,
    content: `
      <h2>🔭 Variable Scope</h2>
      <p><strong>Scope</strong> is about <em>where</em> a variable exists and can be used. Think of it like this: a note you write in your bedroom is only visible in your bedroom — not in the kitchen or at school. Variables work the same way!</p>

      <h3>Global vs Local Scope</h3>
      <div class="code-block">message = "Hello from the global scope!"   # Global variable

def greet():
    local_message = "I only exist inside this function!"  # Local
    print(message)          # ✅ Can see global
    print(local_message)    # ✅ Can see local

greet()
print(message)              # ✅ Can see global
# print(local_message)      # ❌ ERROR! local_message doesn't exist here</div>
      <div class="output-preview">Hello from the global scope!
I only exist inside this function!
Hello from the global scope!</div>

      <div class="lesson-box info">
        <strong>🗝️ Rule:</strong> Variables created <em>inside</em> a function are <strong>local</strong> — they only exist while that function is running. Variables created <em>outside</em> all functions are <strong>global</strong> — accessible everywhere.
      </div>

      <h3>Local Variables Don't Leak Out</h3>
      <div class="code-block">def calculate_area(width, height):
    area = width * height    # local variable
    return area

result = calculate_area(10, 5)
print(result)     # 50 ✅

# area is GONE here — it only existed inside the function
# print(area)     # NameError: name 'area' is not defined</div>

      <h3>The global Keyword (Use Sparingly!)</h3>
      <div class="code-block">score = 0   # Global score

def add_points(points):
    global score    # Tell Python: use the GLOBAL score
    score += points
    print(f"Added {points} points. Score: {score}")

add_points(10)
add_points(25)
add_points(15)
print(f"Final score: {score}")</div>
      <div class="output-preview">Added 10 points. Score: 10
Added 25 points. Score: 35
Added 15 points. Score: 50
Final score: 50</div>

      <div class="lesson-box warning">
        <strong>⚠️ Avoid global when possible!</strong> Over-using global variables makes code confusing and buggy. A better pattern: pass values in as parameters and return the result!
      </div>

      <h3>Better Pattern — Return Instead of Global</h3>
      <div class="code-block"># BAD — modifying global
total = 0
def add_bad(n):
    global total
    total += n

# GOOD — pass and return
def add_good(current_total, n):
    return current_total + n

score = 0
score = add_good(score, 10)
score = add_good(score, 25)
score = add_good(score, 15)
print(f"Final score: {score}")   # 50</div>

      <h3>Variable Shadowing</h3>
      <div class="code-block">x = "I am global"

def test():
    x = "I am local"   # This creates a NEW local x, doesn't change global!
    print(x)           # Prints local x

test()
print(x)               # Still prints global x — unchanged!</div>
      <div class="output-preview">I am local
I am global</div>
    `
  },

  {
    id: "functions_advanced",
    title: "Functions — Advanced Concepts",
    emoji: "⚙️",
    level: "Intermediate",
    color: "#818CF8",
    xp: 40,
    content: `
      <h2>⚙️ Functions — Advanced Concepts</h2>
      <p>You know how to define basic functions. Now let's level up with multiple return values, *args, **kwargs, and writing functions that are clean and reusable like a pro!</p>

      <h3>Multiple Return Values</h3>
      <p>Python functions can return multiple values at once using tuples:</p>
      <div class="code-block">def get_min_max(numbers):
    return min(numbers), max(numbers)    # Returns a tuple

data = [45, 12, 87, 3, 56, 99, 23]
smallest, largest = get_min_max(data)   # Unpack the tuple
print(f"Smallest: {smallest}")  # 3
print(f"Largest:  {largest}")   # 99

# Another example — divide and get remainder
def divide_with_remainder(a, b):
    quotient = a // b
    remainder = a % b
    return quotient, remainder

q, r = divide_with_remainder(17, 5)
print(f"17 ÷ 5 = {q} remainder {r}")</div>
      <div class="output-preview">Smallest: 3
Largest:  99
17 ÷ 5 = 3 remainder 2</div>

      <h3>Default Parameter Values</h3>
      <div class="code-block">def make_greeting(name, greeting="Hello", punctuation="!"):
    return f"{greeting}, {name}{punctuation}"

# Call with all arguments
print(make_greeting("Alex", "Hey", "!!!"))

# Use some defaults
print(make_greeting("Sam", "Hi"))

# Use all defaults
print(make_greeting("Jordan"))</div>
      <div class="output-preview">Hey, Alex!!!
Hi, Sam!
Hello, Jordan!</div>

      <h3>*args — Accept Any Number of Arguments</h3>
      <div class="code-block"># The * collects extra positional arguments into a tuple
def add_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(add_all(1, 2, 3))           # 6
print(add_all(10, 20, 30, 40))    # 100
print(add_all(5))                 # 5

def print_all(*items, separator=" | "):
    print(separator.join(str(i) for i in items))

print_all("apple", "banana", "cherry")</div>
      <div class="output-preview">6
100
5
apple | banana | cherry</div>

      <h3>Docstrings — Document Your Functions</h3>
      <p>Good programmers document their functions with <strong>docstrings</strong> — descriptions of what the function does, its parameters, and what it returns.</p>
      <div class="code-block">def calculate_bmi(weight_kg, height_m):
    """
    Calculate Body Mass Index (BMI).
    
    Parameters:
        weight_kg (float): Weight in kilograms
        height_m  (float): Height in meters
    
    Returns:
        float: The BMI value
    """
    return weight_kg / (height_m ** 2)

bmi = calculate_bmi(65, 1.75)
print(f"BMI: {bmi:.1f}")

# You can read the docstring!
print(calculate_bmi.__doc__)</div>

      <h3>Functions Calling Other Functions</h3>
      <div class="code-block">def celsius_to_fahrenheit(c):
    return (c * 9/5) + 32

def describe_temperature(celsius):
    fahrenheit = celsius_to_fahrenheit(celsius)  # Calls other function!
    
    if celsius >= 30:
        feeling = "hot 🌞"
    elif celsius >= 20:
        feeling = "warm 😊"
    elif celsius >= 10:
        feeling = "cool 🍂"
    else:
        feeling = "cold 🥶"
    
    return f"{celsius}°C / {fahrenheit:.1f}°F — {feeling}"

for temp in [5, 15, 25, 35]:
    print(describe_temperature(temp))</div>
      <div class="output-preview">5°C / 41.0°F — cold 🥶
15°C / 59.0°F — cool 🍂
25°C / 77.0°F — warm 😊
35°C / 95.0°F — hot 🌞</div>
    `
  },

  {
    id: "error_handling",
    title: "Error Handling: Try & Except",
    emoji: "🛡️",
    level: "Intermediate",
    color: "#FB923C",
    xp: 35,
    content: `
      <h2>🛡️ Error Handling: Try & Except</h2>
      <p>Every program will eventually encounter an error — bad input, a missing file, a network failure. Instead of letting your program crash, you can <strong>catch</strong> errors and handle them gracefully. This makes your programs professional and reliable!</p>

      <h3>The Try / Except Block</h3>
      <div class="code-block"># Without error handling — this CRASHES:
# number = int(input("Enter a number: "))
# If user types "hello", you get: ValueError: invalid literal for int()

# WITH error handling — catches the crash!
try:
    number = int(input("Enter a number: "))
    print(f"Double is: {number * 2}")
except ValueError:
    print("❌ That wasn't a number! Please try again.")</div>

      <h3>Multiple Except Blocks</h3>
      <p>Different errors need different responses. You can catch specific error types:</p>
      <div class="code-block">def safe_divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        print("❌ Can't divide by zero!")
        return None
    except TypeError:
        print("❌ Both values must be numbers!")
        return None

print(safe_divide(10, 2))    # 5.0
print(safe_divide(10, 0))    # Can't divide by zero!
print(safe_divide(10, "a"))  # Both values must be numbers!</div>
      <div class="output-preview">5.0
❌ Can't divide by zero!
❌ Both values must be numbers!</div>

      <h3>Common Error Types to Know</h3>
      <table class="lesson-table">
        <tr><th>Error Type</th><th>Caused By</th><th>Example</th></tr>
        <tr><td>ValueError</td><td>Wrong value type</td><td>int("hello")</td></tr>
        <tr><td>TypeError</td><td>Wrong data type</td><td>"a" + 5</td></tr>
        <tr><td>ZeroDivisionError</td><td>Dividing by 0</td><td>10 / 0</td></tr>
        <tr><td>IndexError</td><td>List index out of range</td><td>[1,2,3][9]</td></tr>
        <tr><td>KeyError</td><td>Dict key not found</td><td>d["missing"]</td></tr>
        <tr><td>NameError</td><td>Variable not defined</td><td>print(x) before x = ...</td></tr>
        <tr><td>FileNotFoundError</td><td>File doesn't exist</td><td>open("ghost.txt")</td></tr>
      </table>

      <h3>The Else and Finally Clauses</h3>
      <div class="code-block">try:
    num = int(input("Enter a positive number: "))
    if num < 0:
        raise ValueError("Number must be positive!")
    result = 100 / num

except ValueError as e:
    print(f"❌ Value error: {e}")

except ZeroDivisionError:
    print("❌ Can't divide by zero!")

else:
    # Runs ONLY if no exception occurred
    print(f"✅ 100 ÷ {num} = {result:.2f}")

finally:
    # ALWAYS runs, no matter what!
    print("Thanks for using the calculator! 🧮")</div>

      <h3>Input Validation with Try/Except Loop</h3>
      <div class="code-block">def get_integer(prompt, min_val=None, max_val=None):
    """Keeps asking until user enters a valid integer in range."""
    while True:
        try:
            value = int(input(prompt))
            if min_val is not None and value < min_val:
                print(f"❌ Must be at least {min_val}")
            elif max_val is not None and value > max_val:
                print(f"❌ Must be at most {max_val}")
            else:
                return value    # Valid! Return it.
        except ValueError:
            print("❌ Please enter a whole number!")

age = get_integer("Enter your age: ", min_val=1, max_val=120)
print(f"Your age: {age}")</div>

      <div class="lesson-box tip">
        <strong>💡 Golden Rule:</strong> Catch specific errors, not everything! <code>except Exception:</code> catches all errors, which can hide bugs. Be specific about what you're expecting to go wrong.
      </div>
    `
  },

  {
    id: "string_formatting",
    title: "String Formatting Mastery",
    emoji: "✍️",
    level: "Beginner",
    color: "#38BDF8",
    xp: 25,
    content: `
      <h2>✍️ String Formatting Mastery</h2>
      <p>Strings are everywhere in Python. Knowing how to format them beautifully — aligning text, controlling decimal places, adding padding — will make your output look polished and professional!</p>

      <h3>Three Ways to Format Strings</h3>
      <div class="code-block">name = "Alex"
score = 1234.5678

# Method 1: Concatenation (old, clunky)
print("Player " + name + " scored " + str(score))

# Method 2: .format() (older but still used)
print("Player {} scored {}".format(name, score))

# Method 3: f-strings (BEST — modern and clean) ✨
print(f"Player {name} scored {score}")</div>

      <h3>F-String Formatting Codes</h3>
      <p>Inside the curly braces of an f-string, you can add a <code>:</code> followed by a format code to control how the value looks:</p>
      <div class="code-block">pi = 3.14159265
price = 1234567.89
pct = 0.7523

# Decimal places
print(f"{pi:.2f}")        # 3.14  — 2 decimal places
print(f"{pi:.4f}")        # 3.1416 — 4 decimal places

# Thousands separator
print(f"{price:,.2f}")    # 1,234,567.89

# Percentage
print(f"{pct:.1%}")       # 75.2%

# Width and alignment
print(f"{'Left':<10}|")   # Left      | (left-aligned in 10 chars)
print(f"{'Right':>10}|")  # |     Right (right-aligned)
print(f"{'Center':^10}|") # |  Center  | (centered)

# Padding numbers with zeros
print(f"{42:05d}")         # 00042</div>
      <div class="output-preview">3.14
3.1416
1,234,567.89
75.2%
Left      |
     Right|
  Center  |
00042</div>

      <h3>Building Tables with Formatting</h3>
      <div class="code-block">students = [
    ("Alex",   92, 88, 95),
    ("Sam",    78, 85, 80),
    ("Jordan", 95, 97, 91),
    ("Taylor", 65, 70, 72),
]

# Print a formatted table
print(f"{'Name':<10} {'Test 1':>7} {'Test 2':>7} {'Test 3':>7} {'Avg':>7}")
print("-" * 40)

for name, t1, t2, t3 in students:
    avg = (t1 + t2 + t3) / 3
    print(f"{name:<10} {t1:>7} {t2:>7} {t3:>7} {avg:>7.1f}")</div>
      <div class="output-preview">Name       Test 1  Test 2  Test 3     Avg
----------------------------------------
Alex           92      88      95    91.7
Sam            78      85      80    81.0
Jordan         95      97      91    94.3
Taylor         65      70      72    69.0</div>

      <h3>Multiline Strings</h3>
      <div class="code-block"># Triple quotes create multi-line strings
poem = """
Roses are red,
Violets are blue,
Python is awesome,
And so are you!
"""
print(poem)

# Useful for long messages
receipt = f"""
============================
       RECEIPT
============================
Item: Python Book     $29.99
Item: USB Cable        $9.99
----------------------------
Subtotal:             $39.98
Tax (8%):              $3.20
============================
TOTAL:                $43.18
============================
"""
print(receipt)</div>
    `
  },

  {
    id: "math_module",
    title: "Math & Random Modules",
    emoji: "🎲",
    level: "Beginner",
    color: "#4ADE80",
    xp: 25,
    content: `
      <h2>🎲 Math & Random Modules</h2>
      <p>Python comes with built-in <strong>modules</strong> — collections of pre-written functions you can use. Two of the most useful for beginners are <code>math</code> and <code>random</code>. No need to reinvent the wheel!</p>

      <h3>Importing Modules</h3>
      <div class="code-block"># Import the whole module
import math
import random

# Or import specific functions
from math import sqrt, pi
from random import randint, choice</div>

      <h3>The math Module</h3>
      <div class="code-block">import math

# Constants
print(math.pi)          # 3.141592653589793
print(math.e)           # 2.718281828459045

# Rounding
print(math.floor(4.9))  # 4 — round DOWN
print(math.ceil(4.1))   # 5 — round UP
print(round(4.567, 2))  # 4.57 — round to 2 decimals

# Powers and roots
print(math.sqrt(144))   # 12.0 — square root
print(2 ** 10)          # 1024 — power (no import needed)
print(math.pow(2, 10))  # 1024.0

# Absolute value
print(abs(-42))         # 42
print(math.fabs(-42))   # 42.0

# Trigonometry (useful for games!)
print(math.sin(math.pi / 2))  # 1.0
print(math.cos(0))            # 1.0

# Log and exp
print(math.log(100, 10))  # 2.0 — log base 10</div>

      <h3>The random Module — Your Game-Making Friend</h3>
      <div class="code-block">import random

# Random integer (inclusive on both ends)
dice = random.randint(1, 6)
print(f"Dice roll: {dice}")

# Random float between 0 and 1
prob = random.random()
print(f"Random probability: {prob:.3f}")

# Random float in a range
temp = random.uniform(60.0, 100.0)
print(f"Random temperature: {temp:.1f}°F")

# Pick a random item from a list
colors = ["red", "blue", "green", "yellow", "purple"]
chosen = random.choice(colors)
print(f"Chosen color: {chosen}")

# Shuffle a list (in place)
cards = ["A", "K", "Q", "J", "10"]
random.shuffle(cards)
print(f"Shuffled deck: {cards}")

# Pick multiple unique items
winners = random.sample(colors, k=3)
print(f"3 winners: {winners}")</div>

      <h3>Building a Dice Game with random</h3>
      <div class="code-block">import random

print("🎲 Dice Duel!")
print("You vs the Computer — highest roll wins!\n")

player_roll = random.randint(1, 6)
computer_roll = random.randint(1, 6)

print(f"You rolled:      {'⚀⚁⚂⚃⚄⚅'[player_roll-1]} ({player_roll})")
print(f"Computer rolled: {'⚀⚁⚂⚃⚄⚅'[computer_roll-1]} ({computer_roll})")
print()

if player_roll > computer_roll:
    print("🎉 You win!")
elif computer_roll > player_roll:
    print("💻 Computer wins!")
else:
    print("🤝 It's a tie!")</div>

      <h3>random.seed() — Reproducible Results</h3>
      <div class="code-block">import random

# Setting a seed makes random numbers predictable (great for testing!)
random.seed(42)
print(random.randint(1, 100))  # Always 63 with seed 42
print(random.randint(1, 100))  # Always 1

random.seed(42)                # Reset to same seed
print(random.randint(1, 100))  # 63 again! Reproducible.</div>

      <div class="lesson-box tip">
        <strong>🎮 Challenge:</strong> Build a Rock-Paper-Scissors game! Use <code>random.choice()</code> to pick the computer's move, get the player's move with <code>input()</code>, compare them with if/elif/else, and print the winner!
      </div>
    `
  },

  {
    id: "debugging",
    title: "Debugging Like a Pro",
    emoji: "🐛",
    level: "Beginner",
    color: "#FB7185",
    xp: 20,
    content: `
      <h2>🐛 Debugging Like a Pro</h2>
      <p>A <strong>bug</strong> is a mistake in your code. The process of finding and fixing bugs is called <strong>debugging</strong>. Every programmer — from beginners to experts — spends a huge amount of time debugging. Let's learn how to do it efficiently!</p>

      <div class="lesson-box info">
        <strong>🕷️ Historical Fact:</strong> The word "bug" in programming comes from 1947, when engineers found an actual moth stuck inside a computer relay. They taped it into the logbook and called it "the first actual case of bug being found."
      </div>

      <h3>Types of Bugs</h3>
      <div class="data-types-grid">
        <div class="data-type-card">
          <div class="dt-icon">🔴</div>
          <div class="dt-name">Syntax Errors</div>
          <div class="dt-desc">Python can't read your code at all. Typos, missing colons, wrong indentation.</div>
        </div>
        <div class="data-type-card">
          <div class="dt-icon">🟡</div>
          <div class="dt-name">Runtime Errors</div>
          <div class="dt-desc">Code starts but crashes during execution. Dividing by zero, accessing bad index.</div>
        </div>
        <div class="data-type-card">
          <div class="dt-icon">🔵</div>
          <div class="dt-name">Logic Errors</div>
          <div class="dt-desc">Code runs fine but gives wrong answers. The trickiest kind — no error message!</div>
        </div>
      </div>

      <h3>Strategy 1: Print Debugging</h3>
      <p>The simplest debugger: add <code>print()</code> statements to see what's happening inside your code!</p>
      <div class="code-block"># Buggy function — what's wrong?
def get_average(numbers):
    total = 0
    for num in numbers:
        total = num    # BUG: should be total += num !
    return total / len(numbers)

scores = [80, 90, 70, 100]

# Debug with prints:
def get_average_debug(numbers):
    total = 0
    for num in numbers:
        print(f"  Before: total={total}, adding {num}")
        total += num
        print(f"  After:  total={total}")
    avg = total / len(numbers)
    print(f"Final avg: {total} / {len(numbers)} = {avg}")
    return avg

get_average_debug(scores)</div>
      <div class="output-preview">  Before: total=0, adding 80
  After:  total=80
  Before: total=80, adding 90
  After:  total=170
  ... etc
Final avg: 340 / 4 = 85.0</div>

      <h3>Strategy 2: Read Error Messages Carefully</h3>
      <div class="code-block"># When you get an error, read it like this:
#
# Traceback (most recent call last):
#   File "program.py", line 5, in calculate    ← WHERE in the code
#     result = total / count                   ← WHICH LINE
# ZeroDivisionError: division by zero          ← WHAT went wrong
#
# The error message tells you EXACTLY what happened and where.
# Don't panic — it's a map to the bug!</div>

      <h3>Strategy 3: Rubber Duck Debugging 🦆</h3>
      <p>Explain your code out loud — to a friend, a pet, or even a rubber duck — line by line. The act of explaining forces you to think slowly and carefully. You'll often spot the bug yourself halfway through the explanation!</p>

      <h3>Strategy 4: Simplify and Isolate</h3>
      <div class="code-block"># If a big function is broken, test tiny pieces of it:

# Instead of testing everything at once:
# def complex_function(data):
#     ... 50 lines ...

# Test the suspicious part in isolation:
test_data = [1, 2, 3, 4, 5]
total = sum(test_data)
print(f"Sum test: {total}")  # Does this part work?

count = len(test_data)
print(f"Count test: {count}")  # Does this part work?

average = total / count
print(f"Average test: {average}")  # Does this work?</div>

      <h3>Common Bugs and Their Fixes</h3>
      <table class="lesson-table">
        <tr><th>Symptom</th><th>Likely Cause</th><th>Fix</th></tr>
        <tr><td>IndentationError</td><td>Wrong spacing</td><td>Use 4 spaces consistently</td></tr>
        <tr><td>NameError: 'x' not defined</td><td>Typo or wrong scope</td><td>Check spelling, check where variable is created</td></tr>
        <tr><td>Wrong answer (off by one)</td><td>range() or index error</td><td>Check range start/stop; remember 0-based indexing</td></tr>
        <tr><td>Infinite loop</td><td>Condition never False</td><td>Make sure loop variable changes</td></tr>
        <tr><td>String looks like number</td><td>Forgot to convert input</td><td>Use int() or float()</td></tr>
      </table>

      <div class="lesson-box tip">
        <strong>🧘 Mindset Tip:</strong> Debugging is not a sign you're bad at coding. It's a normal, essential part of the process. Professional developers spend 30-50% of their time debugging. Every bug you fix makes you smarter!
      </div>
    `
  },

  {
    id: "tuples_sets",
    title: "Tuples & Sets",
    emoji: "📦",
    level: "Intermediate",
    color: "#C084FC",
    xp: 30,
    content: `
      <h2>📦 Tuples & Sets</h2>
      <p>Beyond lists and dictionaries, Python has two more powerful data structures: <strong>tuples</strong> (like lists that can't change) and <strong>sets</strong> (collections with no duplicates). Knowing when to use each is a sign of a skilled Python programmer!</p>

      <h3>Tuples — Unchangeable Lists</h3>
      <p>A <strong>tuple</strong> is like a list, but <em>immutable</em> — once created, you cannot change it. Use tuples for data that should never change, like coordinates, RGB colors, or days of the week.</p>
      <div class="code-block"># Create with parentheses (or no brackets at all)
point = (10, 20)
rgb_red = (255, 0, 0)
days = ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")

# Access exactly like lists
print(point[0])      # 10
print(days[-1])      # Sun
print(days[1:4])     # ('Tue', 'Wed', 'Thu')

# Unpack into variables (very useful!)
x, y = point
print(f"x={x}, y={y}")

r, g, b = rgb_red
print(f"Red: r={r}, g={g}, b={b}")

# Tuples can be used as dictionary keys (lists can't!)
locations = {
    (40.7128, -74.0060): "New York",
    (51.5074, -0.1278):  "London",
    (35.6762, 139.6503): "Tokyo",
}
print(locations[(40.7128, -74.0060)])  # New York</div>

      <h3>Why Use Tuples Over Lists?</h3>
      <div class="code-block"># Lists: use when data CAN or SHOULD change
shopping_cart = ["milk", "eggs", "bread"]
shopping_cart.append("butter")    # ✅ Makes sense

# Tuples: use when data should NEVER change
days_of_week = ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")
# days_of_week.append("Funday")   # ❌ Would crash — and that's the POINT!

# Tuples are also faster and use less memory
# Tuples can be used as dict keys; lists cannot</div>

      <h3>Sets — No Duplicates Allowed</h3>
      <p>A <strong>set</strong> stores unique items only — duplicates are automatically removed. Sets are also unordered (no index access), and super fast at checking membership.</p>
      <div class="code-block"># Create with curly braces
fruits = {"apple", "banana", "cherry", "apple", "banana"}
print(fruits)   # {'cherry', 'banana', 'apple'} — duplicates gone!

# Or convert a list to a set to remove duplicates
numbers = [1, 2, 3, 2, 1, 4, 3, 5]
unique = set(numbers)
print(unique)   # {1, 2, 3, 4, 5}

# Convert back to a sorted list
clean_list = sorted(unique)
print(clean_list)   # [1, 2, 3, 4, 5]

# Fast membership test
print("apple" in fruits)    # True  — very fast!
print("mango" in fruits)    # False</div>

      <h3>Set Operations — Math with Data</h3>
      <div class="code-block">python_students = {"Alex", "Sam", "Jordan", "Taylor"}
java_students   = {"Sam", "Morgan", "Jordan", "Casey"}

# Union — students in EITHER class
both = python_students | java_students
print("All students:", both)

# Intersection — students in BOTH classes
both_classes = python_students & java_students
print("In both classes:", both_classes)  # {Sam, Jordan}

# Difference — Python only, not Java
python_only = python_students - java_students
print("Python only:", python_only)  # {Alex, Taylor}

# Symmetric difference — in one class but NOT both
exclusive = python_students ^ java_students
print("In only one:", exclusive)</div>

      <h3>When to Use Which</h3>
      <table class="lesson-table">
        <tr><th>Need</th><th>Use</th><th>Why</th></tr>
        <tr><td>Ordered, changeable items</td><td>List []</td><td>Most flexible</td></tr>
        <tr><td>Ordered, fixed items</td><td>Tuple ()</td><td>Safe, fast, hashable</td></tr>
        <tr><td>Unique items only</td><td>Set {}</td><td>Auto-removes duplicates</td></tr>
        <tr><td>Key-value pairs</td><td>Dict {k:v}</td><td>Fast lookup by key</td></tr>
      </table>
    `
  },

  {
    id: "algorithms_intro",
    title: "Intro to Algorithms",
    emoji: "🧮",
    level: "Intermediate",
    color: "#34D399",
    xp: 40,
    content: `
      <h2>🧮 Intro to Algorithms</h2>
      <p>An <strong>algorithm</strong> is a step-by-step process to solve a problem. Every program you've written uses algorithms! Now let's study some classic ones — understanding these is the foundation of computer science.</p>

      <div class="lesson-box info">
        <strong>💡 What makes a good algorithm?</strong> It's correct (gives the right answer), efficient (doesn't waste time or memory), and clear (easy to understand). Computer scientists measure efficiency using <em>Big O notation</em>, but for now let's focus on building intuition!
      </div>

      <h3>Algorithm 1: Linear Search</h3>
      <p>Check every item one by one until you find what you're looking for. Simple but can be slow on big lists.</p>
      <div class="code-block">def linear_search(items, target):
    """Search through a list one by one. Returns index or -1."""
    for i in range(len(items)):
        if items[i] == target:
            return i    # Found it! Return the position.
    return -1           # Not found

numbers = [45, 12, 87, 3, 56, 99, 23, 67]
target = 56

result = linear_search(numbers, target)
if result != -1:
    print(f"Found {target} at index {result}!")
else:
    print(f"{target} not in the list.")</div>
      <div class="output-preview">Found 56 at index 4!</div>

      <h3>Algorithm 2: Bubble Sort</h3>
      <p>Compare neighboring items and swap them if they're in the wrong order. Repeat until nothing needs swapping. Like bubbles rising to the surface!</p>
      <div class="code-block">def bubble_sort(items):
    """Sort a list using the bubble sort algorithm."""
    n = len(items)
    for pass_num in range(n - 1):
        swapped = False
        for i in range(n - 1 - pass_num):
            if items[i] > items[i + 1]:
                # Swap!
                items[i], items[i + 1] = items[i + 1], items[i]
                swapped = True
        if not swapped:
            break    # Already sorted!
    return items

nums = [64, 25, 12, 22, 11]
print("Before:", nums)
bubble_sort(nums)
print("After: ", nums)</div>
      <div class="output-preview">Before: [64, 25, 12, 22, 11]
After:  [11, 12, 22, 25, 64]</div>

      <h3>Algorithm 3: Counting / Frequency</h3>
      <p>Count how often each item appears. Super useful for analyzing data!</p>
      <div class="code-block">def count_frequency(items):
    """Count how many times each item appears."""
    frequency = {}
    for item in items:
        if item in frequency:
            frequency[item] += 1
        else:
            frequency[item] = 1
    return frequency

votes = ["Alice", "Bob", "Alice", "Charlie", "Bob",
         "Alice", "Bob", "Alice", "Charlie", "Bob"]

results = count_frequency(votes)
print("🗳️ Election Results:")
for candidate, count in sorted(results.items(), key=lambda x: -x[1]):
    bar = "█" * count
    print(f"  {candidate:<10} {bar} ({count} votes)")</div>
      <div class="output-preview">🗳️ Election Results:
  Alice      ████ (4 votes)
  Bob        ████ (4 votes)
  Charlie    ██ (2 votes)</div>

      <h3>Algorithm 4: FizzBuzz (Classic Interview Problem!)</h3>
      <p>FizzBuzz is famous — it's often asked in coding interviews to test basic logic. For numbers 1-30: print "Fizz" if divisible by 3, "Buzz" if divisible by 5, "FizzBuzz" if both, otherwise the number.</p>
      <div class="code-block">for n in range(1, 31):
    if n % 3 == 0 and n % 5 == 0:
        print("FizzBuzz", end=" ")
    elif n % 3 == 0:
        print("Fizz", end=" ")
    elif n % 5 == 0:
        print("Buzz", end=" ")
    else:
        print(n, end=" ")</div>
      <div class="output-preview">1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz</div>

      <h3>Algorithm 5: Find All Factors</h3>
      <div class="code-block">def find_factors(n):
    """Return all factors of a number."""
    factors = []
    for i in range(1, n + 1):
        if n % i == 0:
            factors.append(i)
    return factors

def is_prime(n):
    """Check if a number is prime."""
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

for num in [12, 17, 36, 97]:
    factors = find_factors(num)
    prime = "✅ Prime" if is_prime(num) else "❌ Not prime"
    print(f"{num}: factors={factors} — {prime}")</div>
      <div class="output-preview">12: factors=[1, 2, 3, 4, 6, 12] — ❌ Not prime
17: factors=[1, 17] — ✅ Prime
36: factors=[1, 2, 3, 4, 6, 9, 12, 18, 36] — ❌ Not prime
97: factors=[1, 97] — ✅ Prime</div>

      <div class="lesson-box tip">
        <strong>🏆 You've reached the frontier!</strong> Understanding algorithms means you're thinking like a computer scientist, not just a programmer. From here, explore sorting algorithms, recursion, and data structures — these are the building blocks of all great software!
      </div>
    `
  }
];


const QUIZ_DATA = {
  basics: {
    title: "Python Basics",
    emoji: "🌟",
    color: "#FFD93D",
    questions: [
      {
        q: "Which function is used to display output in Python?",
        options: ["display()", "print()", "output()", "show()"],
        answer: 1,
        explanation: "print() is the built-in function to display output in Python!"
      },
      {
        q: "Which of these is a valid variable name in Python?",
        options: ["2cool", "my-name", "my_name", "my name"],
        answer: 2,
        explanation: "Variable names can't start with numbers, have hyphens, or spaces. Underscores work great!"
      },
      {
        q: "What does # do in Python?",
        options: ["Multiplies by a number", "Adds a comment", "Creates a list", "Prints to screen"],
        answer: 1,
        explanation: "# starts a comment! Python ignores everything after # on that line."
      },
      {
        q: "What is the output of: print(10 % 3)?",
        options: ["3", "3.33", "1", "0"],
        answer: 2,
        explanation: "% is the modulus operator — it gives the remainder. 10 ÷ 3 = 3 with remainder 1!"
      },
      {
        q: "Which data type would you use to store True or False?",
        options: ["int", "str", "float", "bool"],
        answer: 3,
        explanation: "Boolean (bool) stores only True or False values!"
      },
      {
        q: "What does len('Python') return?",
        options: ["5", "6", "7", "Error"],
        answer: 1,
        explanation: "len() counts the characters! P-y-t-h-o-n = 6 characters."
      }
    ]
  },
  loops: {
    title: "Loops & Conditions",
    emoji: "🔁",
    color: "#06D6A0",
    questions: [
      {
        q: "How many times does this loop run? for i in range(5):",
        options: ["4 times", "5 times", "6 times", "Infinite times"],
        answer: 1,
        explanation: "range(5) creates numbers 0,1,2,3,4 — that's 5 numbers, so 5 iterations!"
      },
      {
        q: "Which keyword exits a loop early?",
        options: ["exit", "stop", "break", "end"],
        answer: 2,
        explanation: "break immediately exits the loop and continues with the code after it!"
      },
      {
        q: "What keyword skips the current loop iteration?",
        options: ["skip", "pass", "next", "continue"],
        answer: 3,
        explanation: "continue skips the rest of the current iteration and goes to the next one!"
      },
      {
        q: "What is the correct syntax for an if statement?",
        options: ["if x > 5 then:", "if (x > 5):", "if x > 5:", "IF x > 5:"],
        answer: 2,
        explanation: "Python if statements use 'if condition:' — no parentheses needed, and lowercase!"
      },
      {
        q: "What prints: x=5; print('big' if x>3 else 'small')?",
        options: ["big", "small", "Error", "True"],
        answer: 0,
        explanation: "This is a ternary (inline if). Since x=5 is greater than 3, it prints 'big'!"
      },
      {
        q: "A while loop runs as long as its condition is ___.",
        options: ["False", "True", "None", "Zero"],
        answer: 1,
        explanation: "A while loop keeps running as long as the condition is True. When it's False, the loop ends."
      }
    ]
  },
  functions: {
    title: "Functions",
    emoji: "🧰",
    color: "#8B5CF6",
    questions: [
      {
        q: "What keyword is used to define a function?",
        options: ["function", "def", "func", "define"],
        answer: 1,
        explanation: "def is short for 'define' — you use it to create a new function!"
      },
      {
        q: "What does return do in a function?",
        options: ["Prints the result", "Ends the program", "Sends back a value", "Starts the function"],
        answer: 2,
        explanation: "return sends a value back to wherever the function was called from!"
      },
      {
        q: "What are function inputs called?",
        options: ["Returns", "Variables", "Parameters", "Arguments"],
        answer: 2,
        explanation: "Parameters are the variables listed in the function definition. When you call the function, you pass arguments!"
      },
      {
        q: "What is a function's default parameter value used for?",
        options: ["It crashes if not given", "It's used if no value is provided", "It overrides all values", "It's required"],
        answer: 1,
        explanation: "Default parameters are used when the caller doesn't provide a value for that parameter!"
      },
      {
        q: "What will this return: def add(a,b): return a + b — add(3, 4)?",
        options: ["34", "7", "None", "Error"],
        answer: 1,
        explanation: "add(3, 4) passes 3 and 4. The function adds them: 3 + 4 = 7!"
      }
    ]
  },
  lists: {
    title: "Lists & Dictionaries",
    emoji: "📋",
    color: "#EC4899",
    questions: [
      {
        q: "What is the index of the FIRST item in a Python list?",
        options: ["1", "0", "-1", "Depends on the list"],
        answer: 1,
        explanation: "Python uses zero-based indexing! The first item is always at index 0."
      },
      {
        q: "Which method adds an item to the END of a list?",
        options: ["add()", "push()", "append()", "insert()"],
        answer: 2,
        explanation: "append() adds an item to the end of the list. insert() adds at a specific position!"
      },
      {
        q: "What does mylist[-1] return?",
        options: ["Error", "First item", "Last item", "Second to last item"],
        answer: 2,
        explanation: "Negative indexing goes from the end! -1 is the last item, -2 is second to last."
      },
      {
        q: "How do you access a value in a dictionary?",
        options: ["dict.value", "dict(key)", "dict[key]", "dict->key"],
        answer: 2,
        explanation: "Use square brackets with the key: dict['key'] or dict.get('key')!"
      },
      {
        q: "What is a dictionary key-value pair?",
        options: ["A lock and key", "A word and its meaning", "An index and item", "A function and result"],
        answer: 1,
        explanation: "Dictionaries are like real dictionaries — you look up a key to find its associated value!"
      },
      {
        q: "What does len([1, 2, 3, 4, 5]) return?",
        options: ["4", "5", "6", "15"],
        answer: 1,
        explanation: "len() returns the number of items in the list. There are 5 numbers, so it returns 5!"
      }
    ]
  }
};

const BADGES = [
  { id: "first_lesson", icon: "🌱", name: "First Steps",    desc: "Complete your first lesson",  xp_req: 0,   lesson_req: 1  },
  { id: "explorer",    icon: "🗺️",  name: "Explorer",       desc: "Complete 5 lessons",          xp_req: 0,   lesson_req: 5  },
  { id: "halfway",     icon: "⚡",  name: "Halfway Hero",    desc: "Complete 12 lessons",         xp_req: 0,   lesson_req: 12 },
  { id: "champion",    icon: "🏆",  name: "Python Champion", desc: "Complete all 25 lessons",     xp_req: 0,   lesson_req: 25 },
  { id: "xp_100",      icon: "💰",  name: "Century Club",    desc: "Earn 100 XP",                 xp_req: 100, lesson_req: 0  },
  { id: "xp_300",      icon: "💎",  name: "Diamond Coder",   desc: "Earn 300 XP",                 xp_req: 300, lesson_req: 0  },
  { id: "xp_600",      icon: "🚀",  name: "Rocket Coder",    desc: "Earn 600 XP",                 xp_req: 600, lesson_req: 0  },
  { id: "quizmaster",  icon: "🎯",  name: "Quiz Master",     desc: "Score 100% on any quiz",      xp_req: 0,   lesson_req: 0, quiz_req: true },
];

const SNIPPETS = {
  print: '# Print to the screen\nprint("Hello, World!")\nprint("My name is Alex")\nprint(42 + 8)',
  for: '# For loop example\nfor i in range(5):\n    print(f"Step {i + 1}")\n\n# Loop through a list\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)',
  while: '# While loop example\ncountdown = 5\nwhile countdown > 0:\n    print(f"{countdown}...")\n    countdown -= 1\nprint("GO! 🚀")',
  if: '# If/else example\nscore = 85\n\nif score >= 90:\n    print("A - Excellent!")\nelif score >= 80:\n    print("B - Great job!")\nelif score >= 70:\n    print("C - Good!")\nelse:\n    print("Keep studying!")',
  function: '# Function example\ndef greet(name, emoji="👋"):\n    message = f"Hello, {name}! {emoji}"\n    return message\n\nresult = greet("Alex")\nprint(result)\nprint(greet("Sam", "🚀"))',
  list: '# List example\ngames = ["Minecraft", "Roblox", "Fortnite"]\n\n# Add item\ngames.append("Among Us")\n\n# Print all items\nfor i, game in enumerate(games, 1):\n    print(f"{i}. {game}")\n\nprint(f"Total: {len(games)} games")',
  dict: '# Dictionary example\nplayer = {\n    "name": "Alex",\n    "level": 7,\n    "score": 1250,\n    "items": ["sword", "shield"]\n}\n\n# Access values\nprint(f"Player: {player[\'name\']}")\nprint(f"Level: {player[\'level\']}")\n\n# Loop through all stats\nfor key, value in player.items():\n    print(f"{key}: {value}")'
};
