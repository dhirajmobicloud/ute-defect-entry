import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { NewDefectsStyled } from "../Styled-Components/NewDefectsStyled";
// import data from "./vehicleinfo.json";

const NewDefects = () => {
  const [model, setModel] = useState("all");
  const [period, setPeriod] = useState("");
  // const [startdate, setStartDate] = useState();
  // const [endDate, setEndDate] = useState();
  const [defectSegment, setDefectSegement] = useState("all");
  const [timePeriod, setTimePeriod] = useState("all");
  const [pending, setPending] = useState("Repaired");
  const [data, setData] = useState([]);

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

  useEffect(() => {
    fetch("https://easy-gray-camel-sock.cyclic.app/all_vehicles", {
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
      console.log("@@@@@@@@@@@@@@@@@@@@@@")
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
    } else if(MODEL !== "all" && defectSegment !== "all") {
      console.log("%%%%%%%%%%%%%%%%%%%%%")
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
    } else if(MODEL === "all" && defectSegment !== "all"){
      console.log("**********************")
      let list = data.map((element) => {
        if (pending === "Pending") {
          return {
            ...element,
            defect: element.defect.filter((subElement) => {
              return subElement.Segement === defectSegment 
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
    }
    else if(MODEL !== "all" && defectSegment === "all"){
      console.log("######################")
      let list = data.filter((element)=>element.model === MODEL)
      let list1 = list.map((element) => {
        if (pending === "Pending") {
          return {
            ...element,
            defect: element.defect.filter((subElement) => {
              return subElement.new === true 
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
        setNewDefectList(list1.filter((element) => element.repaired.length > 0));
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

  // Period handler //////////////////////////////////////////

  // const periodlHandler = (e) => {
  //   let date = e.target.value;
  //   // checkPeriod(date);
  //   setPeriod(e.target.value);
  //   console.log(timePeriod);
  //   if (date === "Today") {
  //     let date = moment().format("L");
  //     let today = new Date(date);
  //     setTimePeriod(today);
  //     console.log(today);
  //     let list = newDefectList.filter(
  //       (element) => new Date(element.date) === today
  //     );
  // let a = new Date(element.date)
  // console.log(new Date(element.date))
  // return  a === today;
  //     console.log(list);
  //     setNewDefectList(list);
  //   } else if (date === "Weekly") {
  //     let list = data.filter((element) => {
  //       let a = element.date;
  //       console.log(a);
  //       return element.model === model && a >= timePeriod;
  //     });
  //     console.log(list);
  //     setNewDefectList(list);
  //   } else if (date === "Monthly") {
  //     let list = data.filter((element) => {
  //       let a = new Date(element.date);
  //       return element.model === model && a >= timePeriod;
  //     });
  //     console.log(list);
  //     setNewDefectList(list);
  //   } else {
  //     console.log("something went wrong");
  //   }
  // };

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
        setNewDefectList(
          list.filter((element) => element.repaired.length > 0)
        );
        // console.log(list1.filter((element) => element.repaired.length > 0));
      } else {
        return;
      }
    } 
    else if(model !== "all" && e.target.value === "all") {
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
    }
    else if(model !== "all" && e.target.value !== "all") {
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
          <select className="Model" value={period} onChange={""}>
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
                            <input type="checkbox" />
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
                            <input type="checkbox" />
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
          <form class="row g-3">
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
                SEGEMENT
              </label>
              <select class="form-select" aria-label="Default select example">
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
            <div class="col-md-4">
              <label for="inputPassword4" class="form-label">
                Descrizione
              </label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-4">
              <label for="inputAddress" class="form-label">
                Part name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder=" "
              />
            </div>
            <div class="col-md-4">
              <label for="inputAddress2" class="form-label">
                Component
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder=""
              />
            </div>
            <div class="col-md-4">
              <label for="inputCity" class="form-label">
                EOL station
              </label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Check Point
              </label>
              <input type="text" class="form-control" id="inputState" />
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
              <button type="submit" class="btn btn-primary disabled mx-2">
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
