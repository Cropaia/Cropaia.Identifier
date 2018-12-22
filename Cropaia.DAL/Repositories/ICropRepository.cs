using System.Collections.Generic;
using Cropaia.DAL.Models;

namespace Cropaia.DAL.Repositories
{
    public interface ICropRepository
    {
        IEnumerable<Crop> GetAll();
        Crop GetSingle(int id);
        Crop Add(Crop toAdd);
        Crop Update(Crop toUpdate);
        void Delete(Crop toDelete);
        int Save();
    }
}