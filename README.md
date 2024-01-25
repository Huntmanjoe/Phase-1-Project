This Project's title is Cocktail Club and it will be our group's final project to demonstrate what we learned during Phase 1.

What we set to do was create a website that hypothetically updates every week with new cocktails. Users would go to the website when they get an email that it updated, and would go to the website to find out new recipies and comment their opinions. 

To accomplish that, we had a few tasks to set up. We split up and individually worked on the HTML, CSS and Javascript required to complete the project.

A few nifty goals that our project accomplished are as follows:

 We created a few unique event listeners to interact with the webpage in various ways. these include:
    - Clicking the cocktail images to showcase new information
    - Being able to leave your email in a submission box and "subscribe"
    - leave a comment on the website
    - cast a vote on the website for your favorite cocktail

Of course, some of these additions do not include a database. Meaning they will reset along with the website when it refreshes, but it was simply to showcase that we know how to get to this point.

As far as how the actual Javascript functions and runs the website, here is a step by step showcase:

1. We use the fetch() command to pull data from a Margarita API
2. the .then command turns all of that information into the "data" variable, which then gets sent through a "forEach" to iterate through all of those objects in the array. 
3. For each of the objects that contain their own individual data, we created a function that will gather its specific name, image, ingredients, etc. In order to group them up.
4. The event listener then is placed on the images we just generated and placed into a div. This listener is looking out for clicks on the images, and will trigger a function to replace the current displayed image with whichever one has been clicked.

After that, I would consider the essential "base features" of the website to be done, and I started adding some flair to it by means of the comments, subscription, and voting. Each of these follows similar principals and have similar code. I create a button that has a submission event listener inside, and when you click it, it creates new html code that will store some kind of new information. Whether that be a new comment, a popup box, or a vote count.

Lastly but absolutely not least, was the styling. The Css needed to be constructed in a way that the project would not only be legible, but pleasing to read for the audience. A couple days were spent on creating as clean of a css profile as we could, and I think we did pretty good.

With that, you should have a general idea of what we set out to do and hopefully it stuck out to you. It was a challening project that required our full understanding of the concepts required. 
