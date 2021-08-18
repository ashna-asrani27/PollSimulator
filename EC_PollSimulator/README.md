=>The business logic is present in the file named poll.js.
=>I have used 5 functions to implement the functionalities mentioned in the assignment.
=>I have declared all the arrays as well as the map globally, so that they can be accessed by all the functions.
=>The functions are as follows:
1. addcandidate(candidate)
=> This method stores the candidate names, that will be fetched from the user input, into the global array called candidates.

2. addStudentID(studentid)
=> This method stores the ids of the students who are casting the vote, into the global array called studentIds.
=>I have used a condition to check if the student id already exists in the array.
=> If it is present in the array, then an alert message will be displayed and the student id won't be stored in the array.

3. addVotes(candidateVoted)
=> This method stores the names of the candidates that have recived votes from the students, into the global array called votedCandidates.

4. VotingSummary
=> This method stores the candidate name and the number of votes received by them into the global map called map1.

5. PollResult
=> This method finds the candidate who has got the  highest  count of votes and the second highest count of votes and stores them into the local storage.

=>In all the functions, I have used localStorage.setItem() to store the data and localStorage.getItem() to retrieve the data to display it on the page.

=>The presentation logic is present in all the files present in the components folder.
