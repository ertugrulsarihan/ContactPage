import React, { useEffect, useState } from "react";

export default function ContanctsForm(props) {
  const formAlan = {
    isim: "",
    soyisim: "",
    telefon: "",
    mail: "",
  };

  const [alanlar, setAlanlar] = useState(formAlan);

  useEffect(()=>{
    console.log(props.currentId);
 
    if(props.currentId == ''){
      setAlanlar({...formAlan})
    }
    else{
      setAlanlar({
        ...props.veriler[props.currentId]
      })
    }


  },[props.currentId,props.veriler])

  const alanlarDeğiş = (e) => {
    let alanIsim = e.target.name;
    let alanDeğer = e.target.value;

    setAlanlar({
      ...alanlar,
      [alanIsim]: alanDeğer,
    });
  };

  const verileriKaydet = (e) => {
    e.preventDefault();
   //console.log(alanlar);
    props.veriEkle(alanlar)
  };

  return (
    <form onSubmit={verileriKaydet}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          onChange={alanlarDeğiş}
          className="form-control"
          name="isim"
          placeholder="İsim giriniz"
          value={alanlar.isim || ''}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          onChange={alanlarDeğiş}
          className="form-control"
          name="soyisim"
          placeholder="Soyisim giriniz"
          value={alanlar.soyisim || ''}
        />
      </div>
      <div className="row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-phone"></i>
            </div>
          </div>
          <input
            onChange={alanlarDeğiş}
            className="form-control"
            name="telefon"
            placeholder="Telefon giriniz"
            value={alanlar.telefon || ''}
          />
        </div>

        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope-square"></i>
            </div>
          </div>
          <input
            onChange={alanlarDeğiş}
            className="form-control"
            name="mail"
            placeholder="Mail adresi giriniz"
            value={alanlar.mail || ''}
          />
        </div>
      </div>
      <div className="form-group">
        <input
          type="submit"
          value="Kaydet"
          className="btn btn-success btn-block"
          
        />
      </div>
    </form>
  );
}
