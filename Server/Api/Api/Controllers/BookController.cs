using Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : Controller
    {
        private static List<Book> Books = new List<Book>
        {
            new Book { Id = 1, Title = "The Great Gatsby", Author = "F. Scott Fitzgerald", ISBN = "9780743273565", PublicationDate = new DateTime(1925, 4, 10) },
            new Book { Id = 2, Title = "To Kill a Mockingbird", Author = "Harper Lee", ISBN = "9780061120084", PublicationDate = new DateTime(1960, 7, 11) },
            new Book { Id = 3, Title = "1984", Author = "George Orwell", ISBN = "9780451524935", PublicationDate = new DateTime(1949, 6, 8) }
        };

        private static int CurrentId = 4; 


        [HttpGet]
        public IActionResult GetBooks()
        {
            return Ok(Books);
        }

        [HttpPost]
        public IActionResult AddBook([FromBody] Book book)
        {
            book.Id = CurrentId++;
            Books.Add(book);
            return Ok(book);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBook(int id, [FromBody] Book updatedBook)
        {
            var book = Books.FirstOrDefault(b => b.Id == id);
            if (book == null)
                return NotFound();

            book.Title = updatedBook.Title;
            book.Author = updatedBook.Author;
            book.ISBN = updatedBook.ISBN;
            book.PublicationDate = updatedBook.PublicationDate;
            return Ok(book);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id)
        {
            var book = Books.FirstOrDefault(b => b.Id == id);
            if (book == null)
                return NotFound();

            Books.Remove(book);
            return Ok();
        }
    }
}
