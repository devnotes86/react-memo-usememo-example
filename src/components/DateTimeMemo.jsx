import {memo} from "react";

const DateTimeMemo = memo( function DateTime1() {
   return (
       <div className="componentMemo">
           <b>USING MEMO</b>: Component displaying DateTime only on initial page load (date does not change even if parent component is re-rendered<br />
           DateTime: <b>{Date.now()}</b>
            </div>

   );
});

export default DateTimeMemo;