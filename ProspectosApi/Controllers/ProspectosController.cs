using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ProspectosApi
{


    [ApiController]
    [Route("api/prospectos")]
    public class ProspectosController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public ProspectosController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Prospecto>>> Get()
        {
            return await context.Prospecto.Include(x => x.Domicilio).ToListAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Prospecto>> Get(int id)
        {
            var prospecto = await context.Prospecto.FirstOrDefaultAsync(x => x.Id == id);

            if (prospecto == null)
            {
                return NotFound();
            }

            return prospecto;
        }

        [HttpPost]
        public async Task<ActionResult> Post(Prospecto prospecto)
        {
            context.Add(prospecto);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> put(Prospecto prospecto, int id)
        {
            if (prospecto.Id != id)
            {
                return BadRequest("El Id del Prospecto no coincide con el id de la URL");
            }

            var existe = await context.Prospecto.AnyAsync(x => x.Id == id);

            if (!existe)
            {
                return NotFound();
            }

            context.Update(prospecto);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var existe = await context.Prospecto.AnyAsync(x => x.Id == id);

            if (!existe)
            {
                return NotFound();
            }

            context.Remove(new Prospecto() { Id = id });
            await context.SaveChangesAsync();
            return Ok();
        }

    }
}