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
        print(f"Added {item} (${menu[item]:.2f})")
    else:
        print("Item not found! Try again.")

print("\n🧾 Your Order:")
total = 0
for item, qty in cart.items():
    subtotal = menu[item] * qty
    total += subtotal
    print(f"  {item} x{qty} = ${subtotal:.2f}")

print(f"\nTotal: ${total:.2f}")
print("Thanks for eating at PyBurger! 🎉")</div>

      <div class="lesson-box info">
        <strong>🏆 Achievement Unlocked:</strong> If you can run all 3 projects, you've mastered the basics of Python! You're officially a Python coder. The next step is learning about classes, files, and real libraries!
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
  { id: "first_lesson", icon: "🌱", name: "First Steps", desc: "Complete your first lesson", xp_req: 0, lesson_req: 1 },
  { id: "explorer", icon: "🗺️", name: "Explorer", desc: "Complete 3 lessons", xp_req: 0, lesson_req: 3 },
  { id: "halfway", icon: "⚡", name: "Halfway Hero", desc: "Complete 5 lessons", xp_req: 0, lesson_req: 5 },
  { id: "champion", icon: "🏆", name: "Python Champion", desc: "Complete all 10 lessons", xp_req: 0, lesson_req: 10 },
  { id: "xp_100", icon: "💰", name: "Century Club", desc: "Earn 100 XP", xp_req: 100, lesson_req: 0 },
  { id: "xp_250", icon: "💎", name: "Diamond Coder", desc: "Earn 250 XP", xp_req: 250, lesson_req: 0 },
  { id: "quizmaster", icon: "🎯", name: "Quiz Master", desc: "Score 100% on any quiz", xp_req: 0, lesson_req: 0, quiz_req: true },
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
