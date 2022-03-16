import { Range, getTrackBackground } from "react-range";
function CustomRange({ value, step, min, max, onChange }) {
    return (
        <div>
            <Range
                values={[value]}
                step={step}
                min={min}
                max={max}
                onChange={values => onChange(values[0])}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        className="w-full h-7 flex"
                        style={props.style}
                    >
                        <div
                            ref={props.ref}
                            className="h-1 group w-full rounded-md self-center"
                            style={{
                                background: getTrackBackground({
                                    values: [value],
                                    colors: ["#1db954", "#535353"],
                                    min: min,
                                    max: max
                                }),
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div
                        {...props}
                        className={`w-3 h-3 rounded-full bg-white ${!isDragged ? 'opacity-0' : ''}  group-hover:opacity-100`}
                        style={{
                            ...props.style,
                            boxShadow: "0px 2px 4px 0 rgb( 0 0 0 / 50%)"
                        }}
                    />
                )}
            />
        </div>
    )
}
export default CustomRange