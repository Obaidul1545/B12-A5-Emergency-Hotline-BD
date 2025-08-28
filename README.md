1 What is the difference between getElementById, getElementsByClassName, and
querySelector / querySelectorAll?

getElementById হলো DOM এর মাধমে html element এর নির্দিষ্ট id Attribute কে ধরে ।

getElementsByClassName হলো DOM এর মাধমে html element এর class Attribute কে ধরে।

querySelector হলো DOM এর মাধমে first element কে ধরে।

querySelectorAll হলো DOM এর মাধমে All element কে ধরে।

<!-- ======================================= -->

2 How do you create and insert a new element into the DOM?

প্রথমে createElement() এর মাধমে নতুন তৈরি করে এই element এ নতুন element add করা
হয় । এরপর DOM এর নির্দিষ্ট container a append() করে insert করতে হবে ।

<!-- ======================================= -->

3 What is Event Bubbling and how does it work?

Bubbling হলো DOM এর একটি system । কোন element কে click event চালালে ওই element
এর parent, grandparent, body, document পর্যন্ত এভাবে tree ভাবে Bubbling এর মাধমে
সব element এ click হয় ।

<!-- ======================================= -->

4 What is Event Delegation in JavaScript? Why is it useful? Event Delegation এমন
একটা টেকনিক যার মাধমে আমরা parent element কে even handler ব্যবহার করে child
element কে event চালাতে পারি । এর সুবিধা হল সব গুলা child কে আলাদা event চালাতে
হয় না । নতুন child add হলেও এটা কাজ করে ।

4 What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() হলো form এর Default behavior button click করলে রে reload নেওয়া
বন্ধ করা।

stopPropagation() হলো Event Bubbling and capturing এর Default behavior বন্ধ করা
।
