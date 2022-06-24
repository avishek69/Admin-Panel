import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredInfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitile">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,441</span>
          <span className="featuredMoneyRate">
            -11.7 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitile">sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,441</span>
          <span className="featuredMoneyRate">
            -11.7 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitile">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,441</span>
          <span className="featuredMoneyRate">
            +2.7 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
