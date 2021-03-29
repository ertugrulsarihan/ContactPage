import React, { useEffect, useState } from "react";
import ContanctsForm from "./ContanctsForm";
import fireBaseDb from "../firebase";

export default function Contacts() {
  const [veriler, setVeriler] = useState({});
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    fireBaseDb.child("iletisim").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setVeriler({
          ...snapshot.val(),
        });
      }
      console.log(snapshot.val());
      console.log(veriler);
    });
  }, []);

  const veriEkle = (nesne) => {
    console.log(nesne);
    if (currentId == "") {
      fireBaseDb.child("iletisim").push(nesne, (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else {
      fireBaseDb.child(`iletisim/${currentId}`).set(nesne, (err) => {
        if (err) {
          console.log(err);
        } else {
          setCurrentId("");
        }
      });
    }
  };

  const veriSil = (id) => {
    if (window.confirm("Silmek istediğinizden emin misiniz ?"))
      fireBaseDb.child(`iletisim/${id}`).remove((err) => {
        if (err) console.log(err);
      });
  };

  return (
    <div>
      <div className="jumbotron">
        <div className="container">
          <div className="display-4">
            <h1>İletişim Bilgileri Giriş Sayfası</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContanctsForm {...{ veriEkle, currentId, veriler, veriSil }} />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>İsim Soyisim</th>
                <th>Telefon</th>
                <th>Mail</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(veriler).map((id) => {
                return (
                  <tr key={id}>
                    <td>
                      {veriler[id].isim} {veriler[id].soyisim}
                    </td>
                    <td>{veriler[id].telefon}</td>
                    <td>{veriler[id].mail}</td>
                    <td>
                      <a href
                        className="btn text-primary"
                        onClick={() => setCurrentId(id)}
                      >
                        <i className="fas fa-pencil-alt "></i>
                      </a>
                    </td>
                    <td>
                      <a href
                        className="btn text-danger"
                        onClick={() => veriSil(id)}
                      >
                        <i className="fas fa-trash"></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
