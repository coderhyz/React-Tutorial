import { useState } from 'react';

let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 },
];

export default function ShapeEditor() {
    const [shapes, setShapes] = useState(
        initialShapes
    );

    function handleClick() {
        const nextShapes = shapes.map(shape => {
            if (shape.type === 'square') {
                // 不作改变
                return shape;
            } else {
                // 返回一个新的圆形，位置在下方 50px 处
                return {
                    ...shape,
                    y: shape.y + 50,
                };
            }
        });
        // 使用新的数组进行重渲染
        setShapes(nextShapes);
    }

    return (
        <>
            <button onClick={handleClick}>
                所有圆形向下移动！
            </button>
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    style={{
                        background: 'purple',
                        position: 'absolute',
                        left: shape.x,
                        top: shape.y,
                        borderRadius:
                            shape.type === 'circle'
                                ? '50%' : '',
                        width: 20,
                        height: 20,
                    }} />
            ))}
        </>
    );
}