import { useState } from 'react'

function App() {
  const [biodata, setBiodata] = useState({
    nama: '',
    umur: '',
    email: '',
    alamat: '',
    nohp: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setBiodata({
      ...biodata,
      [name]: value
    })
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Form Biodata</h1>

      {/* FORM INPUT */}
      <input
        type="text"
        name="nama"
        placeholder="Nama"
        value={biodata.nama}
        onChange={handleChange}
      /><br /><br />

      <input
        type="number"
        name="umur"
        placeholder="Umur"
        value={biodata.umur}
        onChange={handleChange}
      /><br /><br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={biodata.email}
        onChange={handleChange}
      /><br /><br />

      <input
        type="text"
        name="alamat"
        placeholder="Alamat"
        value={biodata.alamat}
        onChange={handleChange}
      /><br /><br />

      <input
        type="text"
        name="nohp"
        placeholder="No HP"
        value={biodata.nohp}
        onChange={handleChange}
      /><br /><br />

      {/* OUTPUT */}
      <h2>Hasil Biodata:</h2>
      <p>Nama: {biodata.nama}</p>
      <p>Umur: {biodata.umur}</p>
      <p>Email: {biodata.email}</p>
      <p>Alamat: {biodata.alamat}</p>
      <p>No HP: {biodata.nohp}</p>
    </div>
  )
}

export default App