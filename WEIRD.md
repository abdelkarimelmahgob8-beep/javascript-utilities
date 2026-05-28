1. this 
The Idea: It works like the pronoun "Me". Its value changes based on who is calling it right now, not where it was written.

The Weirdness: If a function inside an object uses this, it knows the object's data. But if you copy that function out and call it alone in the air, this gets lost and gives you undefined because it has no object backing it up.

2. Hoisting 
The Idea: Before running your code, JavaScript takes a quick look and drags all function and var names to the very top of the file.

The Weirdness: This is why you can call a function before you even write it and it still works. If you call a var variable before writing it, it won't crash—it just says undefined because the name went up, but the value is still waiting downstairs.

3. Closures in Loops 
The Idea: Functions have a memory; they remember the variables around them when they were created.

The Weirdness: If you make a loop from 1 to 3, and put a 1-second timer inside using var, the loop finishes instantly and hits 4. When the timers finally wake up a second later, they all look at the same shared memory, see 4, and print 4, 4, 4!

The Fix: Swap var with let. let creates a locked private box for each turn of the loop, so the timers print 1, 2, 3 perfectly.