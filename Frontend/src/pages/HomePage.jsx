import { useGetSiswa } from "../../Features/siswa";
import Navbar from "../components/navbar";
import { Link } from "react-router";

const Home = () => {
  const { data } = useGetSiswa();
  return (
    <>
      <Navbar />
      <h1 className="text-2xl font-semibold text-white mx-10 mt-10">Data Siswa</h1>
      <div className="overflow-x-hidden mt-10 mx-10">
        <table className="table">
          <thead>
            <tr>
              <th>nomor</th>
              <th>Nama</th>
              <th>Umur</th>
              <th>Kelas</th>
              <th>Action</th>
            </tr>
          </thead>
          {data.map((e, index) => {
            return (
              <tbody>
                <tr>
                  <th key={e._id}>{index + 1}</th>
                  <td>{e.nama}</td>
                  <td>{e.umur}</td>
                  <td>{e.kelas}</td>
                  <td>
                    <Link to={`/detail/${e._id}`}>
                      <button className="btn btn-info">Detail</button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <Link to={"/create"}>
        <button className="btn btn-success mx-10 mt-5">Create</button>
      </Link>
    </>
  );
};

export default Home;
