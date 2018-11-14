using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Cropaia.DAL.Repositories;
using Cropaia.Identifier.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Cropaia.Identifier.Controllers
{
    [Route("api/[controller]")]
    public class CropController : Controller
    {
        private readonly ICropRepository _cropRepository;

        public CropController(ICropRepository cropRepository)
        {
            _cropRepository = cropRepository;
        }

        // GET: api/<controller>
        [HttpGet]
        public List<CropModel> Get()
        {
            return _cropRepository.GetAll().Select(x => Mapper.Map<CropModel>(x)).ToList();
            //return new List<CropModel>() { new CropModel() { Id = 1, Name = "Crop 1" }, new CropModel() { Id = 2, Name = "Crop 2" }, new CropModel() { Id = 3, Name = "Crop 3" } };
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
