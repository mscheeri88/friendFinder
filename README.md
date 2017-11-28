Working:
Routing, survey entries work.

Not working:
Logic for best match, modal popping up, image display

I was able to get the data in the right place for the image display just didn't add actual images to reference given my modal would not pop up.

For the best friend logic I would have done the following:

I would have compared the user entered data in a loop against all the other instances of people that have entered information.  Essentially, compare the new array against existing array of answers.  Check the difference between each value for each integer in the array.  Add the total differences together to have a final number.  Least difference between possible options would be considered the "best match" and that object information from the Array would display.

Thanks! 

