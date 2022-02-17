import { FunctionComponent, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable, MotionPathPlugin } from "gsap/all";
import { DateTimePicker } from "@mui/lab";
import { ArrowIcon, LineIcon } from "../icons";
import { TextField } from "@mui/material";
import {Dayjs, isDayjs} from "dayjs"

interface Props {}

gsap.registerPlugin(Draggable, MotionPathPlugin);
const WIDTH = 128;

const Circle: FunctionComponent<Props> = ({ children, ...props }) => {
  const rootRef = useRef(null);
  const arrowRef = useRef(null);
  const lineRef = useRef(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const [datetime, setDatetime] = useState<any>();
  const [datepickerOpen, setDatepickerOpen] = useState(false);

  const onSelect = () => {
    console.log("selected");
    const arrowElm = arrowRef.current;
    const lineElm = lineRef.current;

    const tl = gsap.timeline({ defaults: { duration: 1 } });
    tlRef.current = tl
      .fromTo(
        arrowElm,
        { rotate: 90, translateY: WIDTH, translateX: WIDTH * 0.55, opacity: 0 },
        { translateY: 0, opacity: 1, rotate: 0 }
      )
      .to(arrowElm, { translateX: WIDTH * 1.45 })
      .fromTo(
        lineElm,
        { translateX: WIDTH, scaleX: 0, opacity: 0, transformOrigin: "left" },
        { scaleX: 1, opacity: 1 },
        "<"
      );
    tl.then(() => {
        setDatepickerOpen(true);
      })
  };

  const onRemove = () => {
    tlRef.current?.reverse();
    setDatepickerOpen(false);
  };

  const handleDatepicker = (e: Dayjs | null) => {
    console.log(e?.date());
    
  }

  useEffect(() => {
    Draggable.create(rootRef.current, {
      bounds: document.body,
      autoScroll: 1,
      onDragEnd: function (e) {
        if (this.hitTest("#line")) {
          onSelect();
        } else {
          onRemove();
        }
      },
    });
  }, []);

  return (
    <>
      <div
        ref={rootRef}
        className="h-32 w-32 bg-white rounded-full shadow flex items-center justify-center relative"
      >
        {children}

        <div ref={lineRef} className="opacity-0 absolute">
          <LineIcon />
        </div>

        <div ref={arrowRef} className="opacity-0 absolute">
          <ArrowIcon />
        </div>

        <div>
          
        </div>

        <div className="">
          <DateTimePicker
            onChange={handleDatepicker}
            value={datetime}
            renderInput={(props) => <TextField {...props} className="w-0 h-0 overflow-hidden" />}
            open={datepickerOpen}
          />
        </div>
      </div>
    </>
  );
};

export default Circle;
