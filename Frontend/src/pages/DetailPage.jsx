import { useGetSiswaById, deleteSiswa } from "../../Features/siswa";
import Navbar from "../components/navbar";
import { Link, useParams, useNavigate } from "react-router";

const DetailSiswa = () => {
  const { id } = useParams();
  const { data } = useGetSiswaById(id);
  const navigate = useNavigate();

  const remove = async () => {
    await deleteSiswa(id);
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <h1 className="text-2xl font-semibold text-white mx-10 mt-10">Data Siswa</h1>
      <div className="overflow-x-hidden mt-10 mx-10">
        <table className="table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Umur</th>
              <th>Kelas</th>
              <th>Action</th>
            </tr>
          </thead>
          {data.map((e) => (
            <tbody>
              <tr>
                <input type="hidden" value={e._id} />
                <td>{e.nama}</td>
                <td>{e.umur}</td>
                <td>{e.kelas}</td>
                <td>
                  <Link to={`/update/${e._id}`}>
                    <button className="btn btn-info">update</button>
                  </Link>
                  <Link to={`delete/${e._id}`}>
                    <button className="btn btn-error" onClick={() => remove()}>
                      Delete
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default DetailSiswa;
