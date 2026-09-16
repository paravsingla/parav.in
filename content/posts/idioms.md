# Python Idioms

In this post, we're going to look at some of the most useful Python idioms that can make your code shorter, cleaner, and easier to understand.

Python is often described as an expressive language. Many tasks that require multiple lines of code in other languages can be written in a single line of Python.

We'll explore some built-in features and standard library modules that every Python developer should know.

## PREREQUISITES

- Familiarity with Python
- Basic understanding of loops and functions

## Goals

- Learn common Python idioms
- Write cleaner and more concise code
- Become more comfortable with Python's standard library

## List Comprehensions

Suppose we want a list containing the square of every number from 1 to 10.

A beginner might write:

```python
squares = []

for i in range(1, 11):
    squares.append(i * i)
```

This works perfectly fine.

However, Python provides a more compact syntax called a **list comprehension**.

```python
squares = [i * i for i in range(1, 11)]
```

The result is exactly the same.

```python
>>> squares
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

We can even add conditions.

```python
>>> evens = [i for i in range(20) if i % 2 == 0]

>>> evens
[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
```

Once you become comfortable with list comprehensions, you'll find yourself using them everywhere.

## Dictionary Comprehensions

Just as we can construct lists, we can construct dictionaries.

Suppose we want a mapping of numbers to their squares.

Without a comprehension:

```python
squares = {}

for i in range(5):
    squares[i] = i * i
```

With a dictionary comprehension:

```python
squares = {i: i * i for i in range(5)}
```

The result:

```python
>>> squares
{0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
```

Neat.

## defaultdict

Have you ever written code like this?

```python
counts = {}

for word in words:

    if word not in counts:
        counts[word] = 0

    counts[word] += 1
```

This pattern appears all over the place.

The `collections` module provides a cleaner solution.

```python
from collections import defaultdict

counts = defaultdict(int)

for word in words:
    counts[word] += 1
```

Notice that we never initialize anything.

Missing keys automatically start at zero.

```python
>>> counts["python"]
3
```

The same trick works for lists.

```python
from collections import defaultdict

groups = defaultdict(list)

for name, department in employees:
    groups[department].append(name)
```

No checks required.

## Counter

Here's a question.

How many times does each character appear in a string?

Many developers create a dictionary and count manually.

Python already has a solution.

```python
from collections import Counter

counter = Counter("mississippi")
```

Let's see what it found.

```python
>>> counter
Counter({'i': 4, 's': 4, 'p': 2, 'm': 1})
```

Want the most common elements?

```python
>>> counter.most_common(2)

[('i', 4), ('s', 4)]
```

Oh yeah, it's all coming together.

In many situations, `Counter` is exactly the tool you want.

## zip()

Suppose we have two lists.

```python
names = ["Alice", "Bob", "Charlie"]
scores = [95, 82, 99]
```

A beginner solution might involve indexing.

```python
for i in range(len(names)):
    print(names[i], scores[i])
```

Python gives us a better option.

```python
for name, score in zip(names, scores):
    print(name, score)
```

Output:

```python
Alice 95
Bob 82
Charlie 99
```

The values stay perfectly aligned.

We can even construct a dictionary.

```python
>>> dict(zip(names, scores))

{'Alice': 95, 'Bob': 82, 'Charlie': 99}
```

Pretty handy.

## any()

Suppose we want to know if a list contains at least one negative number.

Many developers write:

```python
found = False

for value in numbers:
    if value < 0:
        found = True
        break
```

Python has already solved this problem.

```python
found = any(value < 0 for value in numbers)
```

Let's see it in action.

```python
>>> any(x < 0 for x in [1, 2, 3, -4])

True
```

The expression stops as soon as a match is found.

This is often both cleaner and faster.

Similarly, there's an opposite function named `all()`.

```python
>>> all(x > 0 for x in [1, 2, 3])

True
```

## heapq

Suppose we want the largest three values in a list.

A common approach is:

```python
sorted(numbers, reverse=True)[:3]
```

This works.

However, if we only need a few values, sorting the entire list can be unnecessary.

Python provides a heap implementation in the `heapq` module.

```python
import heapq

largest = heapq.nlargest(3, numbers)
```

Example:

```python
>>> heapq.nlargest(3, [5, 9, 1, 20, 7, 12])

[20, 12, 9]
```

Likewise:

```python
>>> heapq.nsmallest(3, [5, 9, 1, 20, 7, 12])

[1, 5, 7]
```

Heaps are commonly used in:

- Priority queues
- Scheduling systems
- Graph algorithms
- Streaming computations

You don't need to understand heap internals immediately to benefit from the module.

## Putting It All Together

Let's solve a small problem.

Given a list of employees:

```python
employees = [
    ("Alice", "Engineering"),
    ("Bob", "Engineering"),
    ("Charlie", "Sales"),
    ("David", "Sales"),
    ("Emma", "Engineering")
]
```

We can group employees by department:

```python
from collections import defaultdict

departments = defaultdict(list)

for name, department in employees:
    departments[department].append(name)
```

Count employees per department:

```python
from collections import Counter

counts = Counter(
    department
    for _, department in employees
)
```

Find the largest department:

```python
>>> counts.most_common(1)

[('Engineering', 3)]
```

All without managing a single index variable.

## That's It Folks!

We covered:

```python
List Comprehensions
Dictionary Comprehensions
defaultdict
Counter
zip()
any()
heapq
```

None of these features are particularly complicated.

The real power comes from recognizing common programming patterns and replacing them with the tools Python already provides.

Whenever you find yourself writing:

```python
for ...
if ...
create dictionary ...
create list ...
track counts ...
```

it's worth asking:

> "Is there already a Python idiom for this?"

Very often, the answer is yes.

And your code will usually be shorter, clearer, and easier to maintain because of it.
