var library = [
  { title: "Norse Mythology", year: "2017", author: "Neil Gaiman", publisher: "W. W. Norton & Company" },
  { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" },
  { title: "Mythos: A Retelling of the Myths of Ancient Greece", year: "1981", author: "Stephen Fry", publisher: "Penguin" },
  { title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" },
  { title: "The Pragmatic Programmer", year: "1999", author: "Andy Hunt and Dave Thomas", publisher: "The Pragmatic Bookshelf	" }
  /* Task 2 */
];

/* Task 1 */
function getBookTitle( index ){
  var  titl= library[index].title;
  return titl;
}

console.log(getBookTitle(0));
console.log(getBookTitle(1));

/* Task 3 */
function addBook( book ){
  library.push(book);
  return library;
}

var newBook = {title: "My Auto Biography ", year: "2018", author: "Asif Mahmud", publisher: "Noone is Interested to publish My Book"};
console.log(addBook(newBook));

/* Task 4 */
function bookByAuthor(){
  var author_name=[];
  var temp=[];

  for(var i=0; i< library.length; i++)
  {
    author_name[i]= library[i].author;
  }
  author_name.sort();

  for(var i=0; i< library.length; i++)
  {
    for(var j=0; j<library.length; j++)
    {
    if(author_name[i]==library[j].author)

    {
    //  temp[i].title= library[j].title;
      //temp[i].year= library[j].year;
      //temp[i].author=library[j].author;
      //temp[i].publisher= library[j].publisher;
      temp[i]=library[j];
    }
   }
  }
  for(var i=0; i< library.length; i++)
  {
    //library[i].title= temp[i].title;
  ///  library[i].year= temp[i].year;
  //  library[i].author=temp[i].author;
  //  library[i].publisher= temp[i].publisher;
  library[i]=temp[i];
  }
  return library;
}

console.log(bookByAuthor());

/* Task 5 */
function findByTitle( title ){
  var lib2=[]; var counter=0;

  for(var i=0; i<library.length;i++)
  {
    var str= library[i].title;

    if(str.toLowerCase().indexOf(title)!= -1)
    {
      lib2[counter]= library[i];
      counter++;
    }
  }
  return lib2;
}


console.log(findByTitle("man"));
console.log(findByTitle("myth"));
console.log(findByTitle("auto"));
