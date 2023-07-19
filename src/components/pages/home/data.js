import FoodIcon from "../../../assets/food-icon.png";
import HealthCareIcon from "../../../assets/healthcare-icon.png";
import EducationIcon from "../../../assets/education-icon.png";
import OtherIcon from "../../../assets/other-icon.png";
import UtilityBillsIcon from "../../../assets/bills-icon.png";
import TransportIcon from "../../../assets/transport-icon.png";
export const iconColors = {
  health:{
    color: "blue",
    icon: `${HealthCareIcon}`,
  },
  education:{
    color: "green",
    icon: `${EducationIcon}`,
  },
  food:{
    color: "yellow",
    icon: `${FoodIcon}`,
  },
  bills:{
    color:'orange',
    icon:`${UtilityBillsIcon}`
  },
  transport:{
    color:'violet',
    icon:`${TransportIcon}`,
  },
  other:{
    color:'red',
    icon: `${OtherIcon}`,
  }
};
