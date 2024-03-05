export default function DateTime1() {
   return ( <div className="componentMemo">
                <b>NOT USING memo</b>: Component displaying DateTime when <b>parent</b> is re-rendered (NOT using memo)<br />
                DateTime: <b>{Date.now()}</b>
            </div>

   );
}