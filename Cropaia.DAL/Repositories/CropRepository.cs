using System.Collections.Generic;
using System.Linq;
using Cropaia.DAL.Models;

namespace Cropaia.DAL.Repositories
{
    public class CropRepository : ICropRepository
    {
        private readonly YieldsAppContext _ctx;

        public CropRepository(YieldsAppContext ctx)
        {
            _ctx = ctx;
        }

        public IEnumerable<Crop> GetAll()
        {
            return _ctx.Crops;
        }

        public Crop GetSingle(int id)
        {
            return _ctx.Crops.FirstOrDefault(x => x.Id == id);
        }

        public Crop Add(Crop toAdd)
        {
            _ctx.Crops.Add(toAdd);
            return toAdd;
        }

        public Crop Update(Crop toUpdate)
        {
            _ctx.Crops.Update(toUpdate);
            return toUpdate;
        }

        public void Delete(Crop toDelete)
        {
            _ctx.Crops.Remove(toDelete);
        }

        public int Save()
        {
            return _ctx.SaveChanges();
        }
    }
}
