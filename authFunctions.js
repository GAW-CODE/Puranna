//triggered by signing in
function setupUI(user) {
  uid = user.uid;
}

//use .then(...) after the function call to obtain the value
function getDate(reminder) {
  return db.collection(uid).doc(reminder).get().then(snip => {
    return snip.data().date;
  })
}
function getTitle(reminder) {
  return db.collection(uid).doc(reminder).get().then(snip => {
    return snip.data().title;
  })
}
function getTime(reminder) {
  return db.collection(uid).doc(reminder).get().then(snip => {
    return snip.data().time;
  })
}
function getPriority(reminder) {
  return db.collection(uid).doc(reminder).get().then(snip => {
    return snip.data().priority;
  })
}
function getAll(reminder) {
  return db.collection(uid).doc(reminder).get().then(snip => {
    return snip.data();
  })
}
//invoke the function call to set the value in databse
function setDate(reminder, date) {
  return db.collection(uid).doc(reminder).update({
    date: date
  })
}
function setTitle(reminder, title) {
  return db.collection(uid).doc(reminder).update({
    title: title
  })
}
function setTime(reminder, time) {
  return db.collection(uid).doc(reminder).update({
    time: time
  })
}
function setMonth(reminder, month) {
  return db.collection(uid).doc(reminder).update({
    month: month
  })
}
function setPriority(reminder, priority) {
  return db.collection(uid).doc(reminder).update({
    priority: priority
  })
}
function setAll(reminder, title, date, time, priority, month) {
  return db.collection(uid).doc(reminder).update({
    date: date,
    title: title,
    time: time,
    priority: priority,
    month: month
  })
}




//get the targetReminde, use forEach() for all the following functions
function getTargetReminderTitle(title) {
  return db.collection(uid).where("title","==",title).get().then(elem => {
    return elem.docs;
  })
}
function getTargetReminderTitleAndTime(title, time) {
  return db.collection(uid).where("title","==",title).where("time","==",time).get().then(elem => {
    return elem.docs;
  })
}
function getTargetReminderTitleAndTimeAndDate(title, time, date) {
  return db.collection(uid).where("title","==",title).where("time","==",time).where("date","==",date).get().then(elem => {
    return elem.docs;
  })
}
/*
ex: getTargetReminder("WA Appointment").then(docs => {
      docs.forEach(doc => {
        getAll(doc.id).then(data => {
          console.log(data.priority);
        })
      })
    })
*/
function getTargetReminder(title, time, date, priority) {
  if (arguments.length == 4) {
    return db.collection(uid).where("title","==",title).where("time","==",time).where("date","==",date).where("priority", priority).get().then(elem => {
      return elem.docs;
    })
  } else if (arguments.length == 3) {
    return getTargetReminderTitleAndTimeAndDate(title, time, date)
  } else if (arguments.length == 2) {
    return getTargetReminderTitleAndTime(title, time)
  } else if (arguments.length == 1) {
    return getTargetReminderTitle(title)
  }
}
//use .then(...) and forEach() to modify individual docs
function getTargetPriorityList() {
  return db.collection(uid).where("priority","==",true).get().then(elem => {
    return elem.docs;
  })
}

//input month as nums ex: 1: Jan
/*
ex: getTargetMonthList(3).then(docs => {
      docs.forEach(doc => {
        console.log(doc)
      })
    })
*/
function getTargetMonthList(month) {
  return db.collection(uid).where("month","==", month).get().then(elem => {
    return elem.docs;
  })
}

function getAllReminder() {
  return db.collection(uid).get().then(elem => {
    return elem.docs;
  })
}
