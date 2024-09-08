import { useState } from "react";

function Motibhaiamin_1() {
  let count = 0;
  const [data, setdata] = useState({
    
    select_1: "",
    select_2: "",
    select_3: "",
    select_4: "",
    select_5: "",
    select_6: "",
    select_7: "",
    select_8: "",
    select_9: "",
    select_10: "",
    select_11: "",
    select_12: "",
    select_13: "",
    select_14: "",
    select_15: "",
    select_16: "",
    select_17: "",
    select_18: "",
    select_19: "",
    select_20: "",
    select_21: "",
    select_22: "",
    select_23: "",
    select_24: "",
    select_25: "",
    select_26: "",
    select_27: "",
    select_28: "",
    select_29: "",
    select_30: "",
    select_31: "",
    select_32: "",
    select_33: "",
    select_34: "",
    select_35: "",
    select_36: "",
    select_37: "",
    select_38: "",
    select_39: "",
    select_40: "",
    select_41: "",
    select_42: "",
    select_43: "",
    select_44: "",
    select_45: "",
    select_46: "",
    select_47: "",
    select_48: "",
    select_49: "",
    select_50: "",
    select_51: "",
    select_52: "",
    select_53: "",
    select_54: "",
    select_55: "",
    select_56: "",
    select_57: "",
    select_58: "",
    select_59: "",
    select_60: "",
  });
    const handleInput = (e) => {
        // console.log(e);
        
      const name = e.target.name;
      const value = e.target.value;
      setdata({
        ...data,
        [name]: value,
      });
      console.log(data);
  };
  
    const handleclick = (e) => {
      console.log(e);

      const value = e.target.value;
      count = count- Number(value);
      console.log(count);
    };
  return (
    <>
      <div className="form ">
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col-2">
            <label className="col-sm-10 col-form-label">Pin :</label>
          </div>
          <div className="col-8">
            <input
              required
              type="text"
              className="form-control"
              autoComplete="off"
              //   ref={number}
              name="uid"
              //   value={data.uid}
              //   onChange={handleInput}
            />
          </div>
          <div className=" col">
            <button
              type="button"
              //   onClick={checkpin}
              className="btn btn-primary"
            >
              Search
            </button>
          </div>
        </div>

        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              granthalayna cyavasthatantrano prakar :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_1"
              value={data.select_1}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={1}>sthanik svarajyani sanstha</option>
              <option value={2}>sarkari sanstha ke trust</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 col-13 align-items-center">
          <div className="col">
            <label className="col-form-label col highlight">
              vyavasthatantrnu pradan :
            </label>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              granthalay samitini rachana karel che? :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_2"
              value={data.select_2}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>ha</option>
              <option value={0}>na</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 col-13 align-items-center">
          <div className="col">
            <label className="col-form-label col highlight">
              granthalayni avak kharchni mahiti :
            </label>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              varsh 20-21 no kharch :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_3"
              value={data.select_3}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={0}>0 To 2,00,000</option>
              <option value={1}>2,00,000 To 2,50,000</option>
              <option value={2}>2,50,000 To 3,00,000</option>
              <option value={3}>3,00,000 To 3,50,000</option>
              <option value={4}>3,50,000 thi vadhu</option>
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              varsh 21-22 no kharch :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_4"
              value={data.select_4}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={0}>0 To 2,00,000</option>
              <option value={1}>2,00,000 To 2,50,000</option>
              <option value={2}>2,50,000 To 3,00,000</option>
              <option value={3}>3,00,000 To 3,50,000</option>
              <option value={4}>3,50,000 thi vadhu</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 col-13 align-items-center">
          <div className="col">
            <label className="col-form-label col highlight">
              karmachari angeni mahiti :
            </label>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              karmacharini sankhya :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_5"
              value={data.select_5}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={5}>granthapal+ 3 to vadhu karmachari</option>
              <option value={3}>granthapal+ helper granthpal+peune </option>
              <option value={2}>granthapal+peune </option>
              <option value={1}>granthapal</option>
              <option value={0}>no employee</option>
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              karmacharini laykat :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_6"
              value={data.select_6}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={5}>m.l.b</option>
              <option value={3}>b.l.b</option>
              <option value={2}>certificate corse</option>
              <option value={0}>no laykat</option>
            </select>
          </div>
        </div>

        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              pagar dhoran apay che :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_7"
              value={data.select_7}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={5}>pagardhoran apay che</option>
              <option value={2}>fix pagar</option>
              <option value={0}>manad seva</option>
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              manadvetan apay che ketlu:
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_8"
              value={data.select_8}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={0}>0 to 6000</option>
              <option value={1}>6000 to 7000</option>
              <option value={2}>7000 to 8000</option>
              <option value={3}>8000 thi vadhu</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              seva na lekhit niyamo che :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_9"
              value={data.select_9}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>ha</option>
              <option value={0}>na</option>
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              karmachari kalyanfund jogvai che:
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_10"
              value={data.select_10}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>ha</option>
              <option value={0}>na</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              granthalay pravesh apel vanchanalay vibhag niyamo likht che :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_11"
              value={data.select_11}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>ha</option>
              <option value={0}>na</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 col-13 align-items-center">
          <div className="col">
            <label className="col-form-label col highlight">
              meching sahay :
            </label>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              furnichar mate sahay malel che 2020-2021 :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_12"
              value={data.select_12}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>ha</option>
              <option value={0}>na</option>
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              furnichar mate sahay malel che 2021-2022 :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_13"
              value={data.select_13}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>ha</option>
              <option value={0}>na</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 col-13 align-items-center">
          <div className="col">
            <label className="col-form-label col highlight">
              non meching :
            </label>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              stabdi ujavni mate malel sahay? :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_14"
              value={data.select_14}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>ha</option>
              <option value={0}>na</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 col-13 align-items-center">
          <div className="col">
            <label className="col-form-label col highlight">
              granthalayna samay ange :
            </label>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              pustak apel mate samay :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_15"
              value={data.select_15}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={5}>7 hours to 7+</option>
              <option value={4}>6 to 7</option>
              <option value={3}>5 to 6</option>
              <option value={0}>5 to 1</option>
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              vanchanalay mate samay :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_16"
              value={data.select_16}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={5}>8 hours to 8+</option>
              <option value={4}>7 to 8</option>
              <option value={3}>6 to 7</option>
              <option value={0}>6 to 1</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              week ma raja kyare hoy che :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_17"
              value={data.select_17}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={3}>0</option>
              <option value={1}>1</option>
              <option value={0}>ravivare raja hoy to</option>
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              athavadik rajana divase apapti seva :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_18"
              value={data.select_18}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>pustak aap le seva</option>
              <option value={1}>any one</option>
              <option value={0}>no one</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              varsh darmiyan kamkajna divas :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_19"
              value={data.select_19}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={4}>351 to 365</option>
              <option value={3}>321 to 350</option>
              <option value={2}>301 to 320</option>
              <option value={0}>300 to less then 300</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 col-13 align-items-center">
          <div className="col">
            <label className="col-form-label col highlight">
              granthbhandar ane granthgothavani :
            </label>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              granthalayna granthasangrani mahiti kul sankhya :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_20"
              value={data.select_20}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={4}> 50,001 to vadhu</option>
              <option value={3}>35,001 to 50,000</option>
              <option value={2}>30,001 to 35,000</option>
              <option value={1}>30,000 to 25,000</option>
              <option value={0}>25,000 to 0</option>
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              two varsh darmyan nava umerayel granthoni sankhya :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_21"
              value={data.select_21}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={3}>201 to more</option>
              <option value={2}>101 to 200</option>
              <option value={1}>100 books</option>
              <option value={0}>100 thi less</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              agrath vanchan samagrini vigat :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_22"
              value={data.select_22}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={3}>option 1</option>
              <option value={1}>option 2</option>
              <option value={0}>option 3</option>
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              gam ni vsti na pramane makul takavari :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_23"
              value={data.select_23}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={4}>option 1</option>
              <option value={3}>option 2</option>
              <option value={2}>option 3</option>
              <option value={1}>option 4</option>
              <option value={0}>option 5</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              bhanel vasti na pramane takavari:
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_24"
              value={data.select_24}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={0}>option 1</option>
              <option value={1}>option 2</option>
              <option value={2}>option 3</option>
              <option value={3}>option 4</option>
              <option value={4}>option 5</option>
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              nodhayel sabhyona pramane vanchakni takavari :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_25"
              value={data.select_25}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={4}>option 1</option>
              <option value={3}>option 2</option>
              <option value={2}>option 3</option>
              <option value={1}>option 4</option>
              <option value={0}>option 5</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              gamni bhanel vatna pramanma kul granthoni takavari:
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_26"
              value={data.select_26}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={4}>option 1</option>
              <option value={3}>option 2</option>
              <option value={2}>option 3</option>
              <option value={1}>option 4</option>
              <option value={0}>option 5</option>
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              gamni bhanl vastina pramana ghare vanchva apel granthoni takavari
              :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_27"
              value={data.select_27}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={4}>option 1</option>
              <option value={3}>option 2</option>
              <option value={2}>option 3</option>
              <option value={1}>option 4</option>
              <option value={0}>option 5</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              vasawel granthna praman ma vanchel granthoni takavari :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_28"
              value={data.select_28}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={4}>option 1</option>
              <option value={3}>option 2</option>
              <option value={2}>option 2</option>
              <option value={1}>option 2</option>
              <option value={0}>option 2</option>
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              granth gothawani vigat :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_29"
              value={data.select_29}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={3}>option 1</option>
              <option value={1}>option 2</option>
              <option value={0}>option 3</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              pustako khula kabat ma rakhvama aave che ke bandh:
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_30"
              value={data.select_30}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>option 1</option>
              <option value={0}>option 2</option>
            
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              vishay temaj lekhakono nirdesh karta margdarsho :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_31"
              value={data.select_31}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>option 1</option>
              <option value={0}>option 2</option>
            
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
             kai kai babato nu computerization thayel che :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_34"
              value={data.select_34}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={3}>option 1</option>
              <option value={2}>option 2</option>
              <option value={0}>option 3</option>
            
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              e liberary suvidha uplabdh che? :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_35"
              value={data.select_35}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={3}>option 1</option>
              <option value={0}>option 2</option>
            
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
            grath praprti :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_36"
              value={data.select_36}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>option 1</option>
              <option value={0}>option 2</option>
            
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              pustak kharidi mate wiketao pasethi ho mangaviya che? :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_37"
              value={data.select_37}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>option 1</option>
              <option value={0}>option 2</option>
            
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
            pustak pasandgi mate kaiya sadhano nu upyog karai che?:
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_38"
              value={data.select_38}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>option 1</option>
              <option value={0}>option 2</option>
            
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              nava umerata pustakoni yaadi noticeboard uper mukai che? :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_37"
              value={data.select_37}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>option 1</option>
              <option value={0}>option 2</option>
            
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
             pustako ni nondhani namunana parigrahan regiterma thai che:
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_40"
              value={data.select_40}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={3}>option 1</option>
              <option value={1}>option 2</option>
              <option value={0}>option 3</option>
            
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              pustakoni nondhani kaamgiri partar che to ketli :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_41"
              value={data.select_41}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={0}>option 1</option>
              <option value={2}>option 2</option>
            
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
             gratho uper yogay sathane sika thta niyat jagiya e pitpati lagava ma aave che?:
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_42"
              value={data.select_42}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>option 1</option>
              <option value={0}>option 2</option>
            
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              pustak ni vagikaran kai padhati thi karvama aave che? :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_43"
              value={data.select_43}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={3}>option 1</option>
              <option value={1}>option 2</option>
              <option value={0}>option 3</option>
            
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
             vargikaran mate ketla pustakoni kariyawahi baki che?:
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_44"
              value={data.select_44}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={0}>option 1</option>
              <option value={3}>option 2</option>
            
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
               pustako ni suchi karan kai padhati ti karvama aave che? :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_45"
              value={data.select_45}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={3}>option 1</option>
              <option value={2}>option 2</option>
              <option value={1}>option 3</option>
              <option value={0}>option 4</option>
            
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
             suchi karan mate ketla pustakoni kariyawahi baki che?:
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_46"
              value={data.select_46}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={0}>option 1</option>
              <option value={2}>option 2</option>
            
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
               grath apel mate ni ai pathati amal ma che?:
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_47"
              value={data.select_47}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={3}>option 1</option>
              <option value={2}>option 2</option>
              <option value={1}>option 3</option>
            
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
             vanhako ne ketla divas mate pustako vanchva apai che?:
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_48"
              value={data.select_48}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>option 1</option>
              <option value={0}>option 2</option>
            
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
               niyat mudadt ma pustak parat na aave te late fees levai che? ketli :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_49"
              value={data.select_49}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>option 1</option>
              <option value={0}>option 2</option>
            
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
             niyat mudat ma grantho pacha na aave to smruti partro lakhai che?:
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_50"
              value={data.select_50}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>option 1</option>
              <option value={0}>option 2</option>
            
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
               vanchako ne joitu pustak medvi sake te mate aagav thi pustak reserve karvani sagwad aapai che ? kevi rete :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_51"
              value={data.select_51}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>option 1</option>
              <option value={0}>option 2</option>
            
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
             hare vanchva apel pustako ni kul sankhiya :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_52"
              value={data.select_52}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={4}>option 1</option>
              <option value={3}>option 2</option>
              <option value={2}>option 1</option>
              <option value={1}>option 2</option>
            
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
               aantar grathalay loan ni suvidha che? :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_53"
              value={data.select_53}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>option 1</option>
              <option value={0}>option 2</option>
            
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
             granthalay ma aalag sandharbhav vibhag che?:
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_54"
              value={data.select_54}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>option 1</option>
              <option value={0}>option 2</option>
            
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
               sandharbh grathni ni sankhiya :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_55"
              value={data.select_55}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={0}>option 1</option>
              <option value={1}>option 2</option>
              <option value={2}>option 3</option>
            
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
             aapti sandharbh seva ni nondh mate aalag aalag register rakhai he?:
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_56"
              value={data.select_56}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={1}>option 1</option>
              <option value={0}>option 2</option>
            
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
               sandharbh seva na labh lenar vanhko ni varsik sankhiya :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_57"
              value={data.select_57}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={5}>option 1</option>
              <option value={4}>option 2</option>
              <option value={3}>option 3</option>
              <option value={0}>option 4</option>
            
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
             xerox ke evii koi suvidha aapai che?:
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_58"
              value={data.select_58}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>option 1</option>
              <option value={0}>option 2</option>
            
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
               grathalay ma mangavta deniko ni sankhiya :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_59"
              value={data.select_59}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={0}>option 1</option>
              <option value={3}>option 2</option>
              <option value={5}>option 3</option>
              
            
            </select>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
             garhalay ma mangavta samayako ni sankhiya:
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_60"
              value={data.select_60}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={0}>option 1</option>
              <option value={1}>option 2</option>
              <option value={2}>option 3</option>
              <option value={4}>option 4</option>
            
            </select>
          </div>
          <div className=" col">
            <label className="col-sm-10 col-form-label">
               sandharbh seva na labh lenar vanhko ni varsik sankhiya :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_57"
              value={data.select_57}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={5}>option 1</option>
              <option value={4}>option 2</option>
              <option value={3}>option 3</option>
              <option value={0}>option 4</option>
            
            </select>
          </div>
        </div>
        <div className="row mb-3 col-13 align-items-center">
          <div className="col">
            <label className="col-form-label col highlight">
              vyavasthatantrnu pradan :
            </label>
          </div>
        </div>
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className=" col">
            <label className="col-sm-10 col-form-label">
              granthalay samitini rachana karel che? :
            </label>
          </div>
          <div className="col">
            <select
              id="inputState"
              onClick={handleInput}
              name="select_1"
              value={data.select_1}
              onChange={handleInput}
              className="form-select"
            >
              <option selected value={0}>
                Select
              </option>
              <option value={2}>ha</option>
              <option value={0}>na</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
export default Motibhaiamin_1;
