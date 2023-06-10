using BE.Data;
using BE.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BE.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly DbContextBE _dbContextBE;

        public UsersController(DbContextBE dbContextBE)
        {
            _dbContextBE = dbContextBE;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _dbContextBE.Users.ToListAsync();

            return Ok(users);
        }

        [HttpPost]
        public async Task<IActionResult> AddUser([FromBody] User userRequest)
        {
            userRequest.Id = Guid.NewGuid();
            await _dbContextBE.Users.AddAsync(userRequest);
            await _dbContextBE.SaveChangesAsync();

            return Ok(userRequest);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetUser([FromRoute] Guid id)
        {
            var user = await _dbContextBE.Users.FirstOrDefaultAsync(x => x.Id == id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateUser([FromRoute] Guid id, User updateUserRequest)
        {
            var user = await _dbContextBE.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            user.Name = updateUserRequest.Name;
            user.Email = updateUserRequest.Email;
            user.Phone = updateUserRequest.Phone;
            user.Country = updateUserRequest.Country;
            user.Age = updateUserRequest.Age;

            await _dbContextBE.SaveChangesAsync();

            return Ok(user);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteUser([FromRoute] Guid id)
        {
            var user = await _dbContextBE.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            _dbContextBE.Users.Remove(user);
            await _dbContextBE.SaveChangesAsync();

            return Ok(user);
        }
    }
}
