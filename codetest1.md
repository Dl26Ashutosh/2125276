Note: Please read the guidelines and rules carefully before attempting the assignment:

## Problem Statement:
Write an expressjs app which does the following:
1. The app listens on two API routes(let them both be GET for simplicity): `/input1/:value` and `/input2/:value`
2. Route input1 receives inputs in order like so:
```
{baseurl}/input1/1
{baseurl}/input1/2
{baseurl}/input1/3
{baseurl}/input1/4
{baseurl}/input1/5
...
```
3. Route input2 receives inputs in order like so:
```
{baseurl}/input2/A
{baseurl}/input2/B
{baseurl}/input2/C
{baseurl}/input2/D
{baseurl}/input2/E
...
```
4. There is no order maintained between input1 and input2. Meaning that `/input1/:value` might have been called 100 times before `/input2/:value` is called for the first time.
5. The app writes values into two files output1 and output2 based on the values it receives in input1 and input2.
6. The order of messages that the output files should contain, given the order of input messages, is depicted in this diagram:
https://docs.google.com/drawings/d/1W1KvOW8Lb_yrhX4yPVFuNgq4URv_BUCkOFFbt_eVfLU/edit?usp=sharing 

## Sample Input/Output
### Input
API calls in order:
```
{baseurl}/input1/apple
{baseurl}/input1/beans
{baseurl}/input2/ant
{baseurl}/input2/bear
{baseurl}/input1/corn
{baseurl}/input1/donut
{baseurl}/input2/cat
{baseurl}/input2/deer
```

### Output
Contents of output1.txt:
```
apple
bear
corn
deer
```

Contents of output2.txt
```
ant 
apple
bear
beans
cat
corn
deer
donut
```

## FAQs:
- How to submit the assignment?
    You can submit the assignment as codepen or runkit or github links as reply to the assignment message in linkedin. However you have to stick to the below rules. Do not worry if the code is not runnable in codepen/runkit. Simply write the express app on your machine, get it to work and copy the js into codepen/runkit/github. Unless you are using some esoteric libraries/builds(in which case, please include instructions on how to run the file), just the single file is enough.
- How much time do I have?
    The expected time taken to finish the assignment is 1 hour. You may submit it within 2 days from the time of receiving this assignment. Any further delay will be entertained on a best effort basis on our part.
- May I use any npm libraries?
    Yes, you may.

## Rules:
DO NOT PUBLISH YOUR RUNKIT NOTEBOOK! COPY THE UNPUBLISHED NOTEBOOK'S URL LIKE:
https://runkit.com/YOURID/60ab2582ecdaed001340e831
and paste it in reply to this message in LinkedIn.

DO NOT POST THIS ASSIGNMENT ANYWHERE ON PUBLIC FORUMS/SITES.

NO REQUESTS FOR CLARIFICATION ON THE PROBLEM STATEMENT WILL BE ENTERTAINED. Part of our job is to work with a set of unclear goals and develop based on the best guesstimate on what behavior user expects from our application.

## Sample Submissions

https://codepen.io/adgang/pen/poePWNX

https://runkit.com/adgang/60ababcc592bf5001a5c6ed4

https://gist.github.com/adgang/a89c404684ffb5c27d37c8161285a413