import { Chart as AntvChart } from "@antv/g2";
import { useEffect, useRef } from "react";
import data from "./data.json";

export const Chart = () => {
  const divRef = useRef<HTMLDivElement | undefined>();

  useEffect(() => {
    if (!divRef.current || divRef.current.childElementCount > 0) return;

    setTimeout(() => {
      const _container = document.querySelector("#container1");
      if (_container?.childElementCount && _container?.childElementCount > 0)
        return;
      console.log("divRef.current.childElementCount", _container);
      if (_container) {
        divRef.current = _container as any;
      }
      const chart = new AntvChart({
        container: "container1",
        forceFit: true,
        height: 500,
      });
      chart.source(data);
      chart.scale("Data", {
        range: [0, 1],
        tickCount: 10,
        type: "timeCat",
      });
      chart.axis("Data", {
        label: {
          textStyle: {
            fill: "#aaaaaa",
          },
        },
      });
      chart.axis("sales", {
        label: {
          textStyle: {
            fill: "#aaaaaa",
          },
          formatter: (text) => {
            return text.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
          },
        },
      });
      chart.area().position("Data*sales");
      chart.render();
    }, 1000);
  }, []);

  return (
    <div
      ref={divRef as any}
      id="container1"
      style={{ width: "100%", height: 500 }}
    ></div>
  );
};
