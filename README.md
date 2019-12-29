# Purpose

This is a fun little example I'm playing around to understand asynchronous tools and patterns in Javascript. 

# What it does

Take the real world challenge of preparing and serving a meal. Say there are three key activities: cooking something, setting the table, then serving it to the eager diner that's been patiently waiting for it. You must have cooked the food and set the table before you can serve it, but you can cook independently from setting the table.

Each file uses a different style of programming to simulate this situation. Each activity to be simulated has a synchronous function, which represents a 3rd party API you may be using (such as downloading images). Thus each approach may involve wrapping the synchronous functions in a way that they may be used asynchronously.

There are some simple timers writing to console to track the performance of each approach, to illustrate the benefits of asynchronous execution.

# Contributing

Feel free to suggest improvements to increase:
- clarity of the programming concept
- code readability
- accuracy of the model.
