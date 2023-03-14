import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { NewDefectsStyled } from "../Styled-Components/NewDefectsStyled";
// import data from "./vehicleinfo.json";

const NewDefects = () => {
  const [model, setModel] = useState("all");
  const [period, setPeriod] = useState("today");
  // const [startdate, setStartDate] = useState();
  // const [endDate, setEndDate] = useState();
  const [defectSegment, setDefectSegement] = useState("all");
  const [timePeriod, setTimePeriod] = useState("all");
  const [pending, setPending] = useState("Repaired");
  const [data, setData] = useState([]);
  const [sectedDefects, setSelectedDefects] = useState([]);
  const [newDefect, setNewDefect] = useState({
    Digit_13: "",
    AA: "",
    BB: "",
    CC: "",
    Componente: "",
    Difetti: "",
    Posizioni: "",
    DD: "",
    Descrizione: "",
    EOL_Station: "",
    LOC: "",
    Station_No: "",
    Check_point: "",
    Barcode: "",
    // Segement: "",
    added_by_admin: true,
  });

  // let list = data
  // let list = data.map((element) => {
  //   if (pending === "Repaired") {
  //     return {
  //       ...element,
  //       repaired: element.repaired.filter(
  //         (subElement) => subElement.new === true
  //       ),
  //     };
  //   } else if (pending === "Pending") {
  //     return {
  //       ...element,
  //       repaired: element.defect.filter(
  //         (subElement) => subElement.new === true
  //       ),
  //     };
  //   }
  // });
  // console.log(list)
  // console.log(list.filter((element) => element.repaired.length > 0));

  const [newDefectList, setNewDefectList] = useState(
    // []
    data.filter((element) => element.repaired.length > 0)
  );

  const getData = () => {
    fetch(`${process.env.REACT_APP_API_URL}/all_vehicles`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let list = data.map((element) => {
          if (pending === "Repaired") {
            return {
              ...element,
              repaired: element.repaired.filter(
                (subElement) => subElement.new === true
              ),
            };
          } else if (pending === "Pending") {
            return {
              ...element,
              repaired: element.defect.filter(
                (subElement) => subElement.new === true
              ),
            };
          }
        });
        setData(list);
        console.log(list);
        return list;
      })
      .then((data1) => {
        if (pending === "Repaired") {
          setNewDefectList(
            data1.filter((element) => element.repaired.length > 0)
          );
          console.log(data1.filter((element) => element.repaired.length > 0));
        } else if (pending === "Pending") {
          setNewDefectList(
            data1.filter((element) => element.defect.length > 0)
          );
        } else {
          return;
        }
        // modelHandler(model);
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (pending === "Repaired") {
      setNewDefectList(data.filter((element) => element.repaired.length > 0));
      console.log(data.filter((element) => element.repaired.length > 0));
    } else if (pending === "Pending") {
      setNewDefectList(data.filter((element) => element.defect.length > 0));
    } else {
      return;
    }
    modelHandler(model);
    // console.log(newDefectList);
    // eslint-disable-next-line
  }, [pending]);

  // Model handler //////////////////////////////////////////

  const modalStateHandler = (e) => {
    setModel(e.target.value);
    modelHandler(e.target.value);
  };

  const modelHandler = (MODEL) => {
    if (MODEL === "all" && defectSegment === "all") {
      console.log("@@@@@@@@@@@@@@@@@@@@@@");
      let list = data.map((element) => {
        if (pending === "Pending") {
          return {
            ...element,
            defect: element.defect.filter((subElement) => {
              return subElement.new === true;
            }),
          };
        } else if (pending === "Repaired") {
          return {
            ...element,
            repaired: element.repaired.filter(
              (subElement) => subElement.new === true
            ),
          };
        } else {
          return;
        }
      });
      console.log(list);

      if (pending === "Pending") {
        console.log(list.filter((element) => element.defect.length > 0));
        setNewDefectList(list.filter((element) => element.defect.length > 0));
      } else if (pending === "Repaired") {
        console.log(list.filter((element) => element.repaired.length > 0));
        setNewDefectList(list.filter((element) => element.repaired.length > 0));
      }
    } else if (MODEL !== "all" && defectSegment !== "all") {
      console.log("%%%%%%%%%%%%%%%%%%%%%");
      let list = data.filter((element) => element.model === MODEL);
      let list1 = list.map((element) => {
        if (pending === "Pending") {
          return {
            ...element,
            defect: element.defect.filter(
              (subElement) => subElement.Segement === defectSegment
            ),
          };
        } else if (pending === "Repaired") {
          return {
            ...element,
            repaired: element.repaired.filter(
              (subElement) => subElement.Segement === defectSegment
            ),
          };
        }
      });
      let list2 = list1.map((element) => {
        if (pending === "Pending") {
          return {
            ...element,
            defect: element.defect.filter(
              (subElement) => subElement.new === true
            ),
          };
        } else if (pending === "Repaired") {
          return {
            ...element,
            repaired: element.repaired.filter(
              (subElement) => subElement.new === true
            ),
          };
        }
      });

      if (pending === "Pending") {
        setNewDefectList(list2.filter((element) => element.defect.length >= 0));
        console.log(list2.filter((element) => element.defect.length >= 0));
      } else if (pending === "Repaired") {
        setNewDefectList(
          list2.filter((element) => element.repaired.length > 0)
        );
        // console.log(list1.filter((element) => element.repaired.length > 0));
      }

      // checkPeriod();
    } else if (MODEL === "all" && defectSegment !== "all") {
      console.log("**********************");
      let list = data.map((element) => {
        if (pending === "Pending") {
          return {
            ...element,
            defect: element.defect.filter((subElement) => {
              return subElement.Segement === defectSegment;
            }),
          };
        } else if (pending === "Repaired") {
          return {
            ...element,
            repaired: element.repaired.filter(
              (subElement) => subElement.Segement === defectSegment
            ),
          };
        } else {
          return;
        }
      });
      console.log(list);

      if (pending === "Pending") {
        console.log(list.filter((element) => element.defect.length > 0));
        setNewDefectList(list.filter((element) => element.defect.length > 0));
      } else if (pending === "Repaired") {
        console.log(list.filter((element) => element.repaired.length > 0));
        setNewDefectList(list.filter((element) => element.repaired.length > 0));
      }
    } else if (MODEL !== "all" && defectSegment === "all") {
      console.log("######################");
      let list = data.filter((element) => element.model === MODEL);
      let list1 = list.map((element) => {
        if (pending === "Pending") {
          return {
            ...element,
            defect: element.defect.filter((subElement) => {
              return subElement.new === true;
            }),
          };
        } else if (pending === "Repaired") {
          return {
            ...element,
            repaired: element.repaired.filter(
              (subElement) => subElement.new === true
            ),
          };
        } else {
          return;
        }
      });
      // console.log(list);

      if (pending === "Pending") {
        console.log(list1.filter((element) => element.defect.length > 0));
        setNewDefectList(list1.filter((element) => element.defect.length > 0));
      } else if (pending === "Repaired") {
        console.log(list1.filter((element) => element.repaired.length > 0));
        setNewDefectList(
          list1.filter((element) => element.repaired.length > 0)
        );
      }
    }
  };

  // Check period //////////////////////////////////////////

  // const checkPeriod = (TimePeriod) => {
  //   if (TimePeriod === "Today") {
  //     let date = moment().format("L");
  //     let today = new Date(date);
  //     setTimePeriod(today);
  //     console.log(today);
  //   } else if (TimePeriod === "Weekly") {
  //     let date = moment().subtract(7, "days").calendar();
  //     let week = new Date(date);
  //     setTimePeriod(week);
  //     console.log(week);
  //   } else if (TimePeriod === "Monthly") {
  //     let date = moment().subtract(30, "days").calendar();
  //     let month = new Date(date);
  //     setTimePeriod(month);
  //     console.log(month);
  //   }
  // };

  const checkPeriod = (data) => {
    let today = moment;
    let week = moment().subtract(7, "days").calendar();
    let month = moment().subtract(30, "days").calendar();
  };
  // console.log( moment("09/05/2002")._d)

  console.log(checkPeriod(data));

  // Segement handler //////////////////////////////////////////

  const segementHandler = (e) => {
    console.log(e.target.value);
    setDefectSegement(e.target.value);

    if (model === "all" && e.target.value === "all") {
      let list = data.map((element) => {
        if (pending === "Pending") {
          return {
            ...element,
            defect: element.defect.filter(
              (subElement) => subElement.new === true
            ),
          };
        } else if (pending === "Repaired") {
          return {
            ...element,
            repaired: element.repaired.filter(
              (subElement) => subElement.new === true
            ),
          };
        } else {
          return;
        }
      });

      // console.log(list)

      if (pending === "Pending") {
        setNewDefectList(list.filter((element) => element.defect.length >= 0));
        console.log(list.filter((element) => element.defect.length >= 0));
      } else if (pending === "Repaired") {
        setNewDefectList(list.filter((element) => element.repaired.length > 0));
        // console.log(list1.filter((element) => element.repaired.length > 0));
      } else {
        return;
      }
    } else if (model === "all" && e.target.value !== "all") {
      let list = data.map((element) => {
        if (pending === "Pending") {
          return {
            ...element,
            defect: element.defect.filter(
              (subElement) => subElement.Segement === e.target.value
            ),
          };
        } else if (pending === "Repaired") {
          return {
            ...element,
            repaired: element.repaired.filter(
              (subElement) => subElement.Segement === e.target.value
            ),
          };
        } else {
          return;
        }
      });

      if (pending === "Pending") {
        setNewDefectList(list.filter((element) => element.defect.length >= 0));
        console.log(list.filter((element) => element.defect.length >= 0));
      } else if (pending === "Repaired") {
        setNewDefectList(list.filter((element) => element.repaired.length > 0));
        // console.log(list1.filter((element) => element.repaired.length > 0));
      } else {
        return;
      }
    } else if (model !== "all" && e.target.value === "all") {
      let list = data.filter((element) => element.model === model);
      let list1 = list.map((element) => {
        if (pending === "Pending") {
          return {
            ...element,
            defect: element.defect.filter(
              (subElement) => subElement.new === true
            ),
          };
        } else if (pending === "Repaired") {
          return {
            ...element,
            repaired: element.repaired.filter(
              (subElement) => subElement.new === true
            ),
          };
        } else {
          return;
        }
      });
      if (pending === "Pending") {
        setNewDefectList(list1.filter((element) => element.defect.length >= 0));
        console.log(list1.filter((element) => element.defect.length >= 0));
      } else if (pending === "Repaired") {
        setNewDefectList(
          list1.filter((element) => element.repaired.length > 0)
        );
        // console.log(list1.filter((element) => element.repaired.length > 0));
      } else {
        return;
      }
    } else if (model !== "all" && e.target.value !== "all") {
      let list = data.filter((element) => element.model === model);
      let list1 = list.map((element) => {
        if (pending === "Pending") {
          return {
            ...element,
            defect: element.defect.filter(
              (subElement) => subElement.Segement === e.target.value
            ),
          };
        } else if (pending === "Repaired") {
          return {
            ...element,
            repaired: element.repaired.filter(
              (subElement) => subElement.Segement === e.target.value
            ),
          };
        } else {
          return;
        }
      });
      if (pending === "Pending") {
        setNewDefectList(list1.filter((element) => element.defect.length >= 0));
        console.log(list1.filter((element) => element.defect.length >= 0));
      } else if (pending === "Repaired") {
        setNewDefectList(
          list1.filter((element) => element.repaired.length > 0)
        );
        // console.log(list1.filter((element) => element.repaired.length > 0));
      } else {
        return;
      }
    }
  };

  // Pending or repaired handler //////////////////////////////////////////

  const pendingORrepairedHandler = (e) => {
    console.log(e.target.value);
    setPending(e.target.value);
  };

  const selectDefects = (e, vin) => {
    console.log("this is event : ", e);

    console.log("this is vin : ", vin);
    setSelectedDefects([
      ...sectedDefects,
      Object.assign(e, { vin: vin, status: pending }),
    ]);
  };

  const replaceDefects = () => {
    fetch(`https://easy-gray-camel-sock.cyclic.app/replace-defects`, {
      method: "POST",
      body: JSON.stringify({ sectedDefects, newDefect }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      console.log(res);
      alert("Success");
      getData();
    });
    // console.log( JSON.stringify({sectedDefects, newDefect }) )
  };

  const newDefectOnchange = (e) => {
    setNewDefect({ ...newDefect, [e.target.name]: e.target.value });
  };

  return (
    <NewDefectsStyled className="mainpart">
      <div className="modeldescription">
        <div className="inputElement">
          <h5>MODEL</h5>
          <select
            className={"Model"}
            onChange={modalStateHandler}
            value={model}
          >
            <option value="all">ALL MODELS</option>
            {data.map((vehicle, index) => (
              <option key={index} value={vehicle.model}>
                {vehicle.model}
              </option>
            ))}
          </select>
        </div>
        <div className="inputElement">
          <h5>PERIOD</h5>
          <select
            className="Model"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option value="all" selected>
              ALL
            </option>
            <option value="Today">Today</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
        <div className="inputElement">
          <h5>SEGEMENT</h5>
          <select
            className="Model"
            value={defectSegment}
            onChange={segementHandler}
          >
            <option value="all">All defects</option>
            <option value="Surface-RH-139">Surface RH 139</option>
            <option value="Surface-FTR-139">Surface FTR 139</option>
            <option value="Bluetooth-139">Bluetooth 139</option>
            <option value="Electrical-1-140">Electrical 1 140</option>
            <option value="Surface-LH-140">Surface LH 140</option>
            <option value="Rear-Int-140">Rear Int 140</option>
            <option value="Rear-EXT-141">Rear EXT 141</option>
            <option value="RH-Exterior-141">RH Exterior 141</option>
            <option value="LH-Exterior-141">LH Exterior 141</option>
            <option value="Electrical-2-142">Electrical 2 142</option>
            <option value="Front EXT-142">Front EXT 142</option>
            <option value="Door-Closing-142">Door Closing 142</option>
          </select>
        </div>
        <div className="inputElement">
          <h5>Pending / Repaired</h5>
          <select
            className="Model"
            value={pending}
            onChange={pendingORrepairedHandler}
          >
            <option value="Pending">Pending</option>
            <option value="Repaired">Repaired</option>
          </select>
        </div>
      </div>
      <div className="defect-list-container container-fluid">
        <div className="defects">
          <div className="defectlist">
            {newDefectList.length >= 1 ? (
              newDefectList.map((element) => {
                if (pending === "Repaired") {
                  return element.repaired.map((item) => {
                    return (
                      <div className="listdata d-flex">
                        <div>
                          <form className="mx-2">
                            <input required
                              onChange={() => selectDefects(item, element.vin)}
                              type="checkbox"
                            />
                          </form>
                        </div>
                        <div className="vinNumber mx-2 my-2">{element.vin}</div>
                        <div className="Segement mx-2 my-2">
                          {element.model}
                        </div>
                        <div className="Segement mx-2 my-2">
                          {item.Segement}
                        </div>
                        <div className="description mx-2 my-2">
                          {item.Descrizione}
                        </div>
                      </div>
                    );
                  });
                } else if (pending === "Pending") {
                  return element.defect.map((item) => {
                    return (
                      <div className="listdata d-flex">
                        <div>
                          <form className="mx-2">
                            <input required
                              onChange={() => selectDefects(item)}
                              type="checkbox"
                            />
                          </form>
                        </div>
                        <div className="vinNumber mx-2 my-2">{element.vin}</div>
                        <div className="Segement mx-2 my-2">
                          {element.model}
                        </div>
                        <div className="Segement mx-2 my-2">
                          {item.Segement}
                        </div>
                        <div className="description mx-2 my-2">
                          {item.Descrizione}
                        </div>
                      </div>
                    );
                  });
                }
              })
            ) : (
              <div className="d-flex">
                <h5
                  style={{
                    margin: "auto",
                    color: "#fff",
                    padding: "20px",
                  }}
                >
                  NOT FOUND ANY NEW DEFECTS
                </h5>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="section-2">
        <div className="management-section">
          <form class="row g-3" onSubmit={replaceDefects}>
            <div class="col-md-2">
              <label for="inputEmail4" class="form-label">
                SEGEMENT
              </label>
              <select  required
                class="form-select"
                value={newDefect.Segement}
                name="Segement"
                onChange={newDefectOnchange}
                aria-label="Default select example"
              >
                <option selected>Choose...</option>
                <option value="Surface-RH-139">Surface RH 139</option>
                <option value="Surface-FTR-139">Surface FTR 139</option>
                <option value="Bluetooth-139">Bluetooth 139</option>
                <option value="Electrical-1-140">Electrical 1 140</option>
                <option value="Surface-LH-140">Surface LH 140</option>
                <option value="Rear-Int-140">Rear Int 140</option>
                <option value="Rear-EXT-141">Rear EXT 141</option>
                <option value="RH-Exterior-141">RH Exterior 141</option>
                <option value="LH-Exterior-141">LH Exterior 141</option>
                <option value="Electrical-2-142">Electrical 2 142</option>
                <option value="Front EXT-142">Front EXT 142</option>
                <option value="Door-Closing-142">Door Closing 142</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputText" class="form-label">
                Descrizione
              </label>
              <input required
                type="text"
                value={newDefect.Descrizione}
                name="Descrizione"
                onChange={newDefectOnchange}
                class="form-control"
                id="inputText"
              />
            </div>
            {/* <div class="col-md-2">
              <label for="inputAddress" class="form-label">
                Part name
              </label>
              <input required
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder=" "
              />
            </div>
            <div class="col-md-2">
              <label for="inputAddress2" class="form-label">
                Component
              </label>
              <input required
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder=""
                name="Componente"
                value={newDefect.Componente}
                onChange={newDefectOnchange}
              />
            </div>
            <div class="col-md-2">
              <label for="inputCity" class="form-label">
                EOL station
              </label>
              <input required
                type="text"
                class="form-control"
                name="EOL_Station"
                value={newDefect.EOL_Station}
                onChange={newDefectOnchange}
                id="inputCity"
              />
            </div>
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                Check Point
              </label>
              <input required
                type="text"
                class="form-control"
                name="Check_point"
                value={newDefect.Check_point}
                onChange={newDefectOnchange}
                id="inputState"
              />
            </div>
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                13 Digit
              </label>
              <input required
                type="text"
                onChange={newDefectOnchange}
                class="form-control"
                name="Digit_13"
                value={newDefect.Digit_13}
                id="inputState"
              />
            </div>
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                AA
              </label>
              <input required
                type="text"
                onChange={newDefectOnchange}
                class="form-control"
                name="AA"
                value={newDefect.AA}
                id="inputState"
              />
            </div>
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                BB
              </label>
              <input required
                type="text"
                onChange={newDefectOnchange}
                class="form-control"
                name="BB"
                value={newDefect.BB}
                id="inputState"
              />
            </div>
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                CC
              </label>
              <input required
                type="text"
                onChange={newDefectOnchange}
                class="form-control"
                name="CC"
                value={newDefect.CC}
                id="inputState"
              />
            </div>
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                DD
              </label>
              <input required
                type="text"
                onChange={newDefectOnchange}
                class="form-control"
                name="DD"
                value={newDefect.DD}
                id="inputState"
              />
            </div>
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                LOC
              </label>
              <input required
                type="text"
                onChange={newDefectOnchange}
                class="form-control"
                name="LOC"
                value={newDefect.LOC}
                id="inputState"
              />
            </div>
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                Barcode
              </label>

              <select required 
                class="form-select"
                onChange={newDefectOnchange}
                name="Barcode"
                value={newDefect.Barcode}
                aria-label="Default select example"
              >
                <option value="yes">Yes</option>
                <option value="2">No</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                Diffetti
              </label>
              <input required
                type="text"
                class="form-control"
                onChange={newDefectOnchange}
                name="Difetti"
                value={newDefect.Difetti}
                id="inputState"
              />
            </div> */}
            <div class="col-12 d-flex">
              <button
                type="submit"
                
                class="btn btn-primary m-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </NewDefectsStyled>
  );
};

export default NewDefects;
