import { useState } from 'react';
let nextId = 3
const initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade', isEdit: false },
    { id: 1, name: 'Lamidi Olonade Fakeye', isEdit: false },
    { id: 2, name: 'Louise Nevelson', isEdit: false },
];

export default function TodoList() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState(
        initialArtists
    );
    // 反转数组
    function handleReverseClick() {
        const nextList = [...artists];
        nextList.reverse();
        setArtists(nextList);
    }

    return (
        <>
            <h1>振奋人心的雕塑家们：</h1>
            <div style={{ display: 'flex', gap: 10, marginTop: 40, }}>
                <input
                    style={{ maxWidth: 300, height: 40, }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                {/* 增加元素 */}
                <button onClick={() => {
                    if (!name.trim()) return
                    setArtists((prevArtistArr => {
                        if (!name.trim()) return
                        const isExist = prevArtistArr.find(artist => artist.name == name.trim())
                        if (isExist) {
                            return prevArtistArr
                        }
                        return [...prevArtistArr, { id: nextId++, name: name, isEdit: false }]
                    }))
                    setName("")
                }}>
                    插入
                </button>
                {/* 反转列表 */}
                <button onClick={handleReverseClick}>
                    反转列表
                </button>
            </div>
            <ul>
                {artists.length > 0 ? (artists.map(artist => (
                    <li key={artist.id}>{artist.name}
                        {/* 删除元素 */}
                        <button onClick={() => {
                            setArtists(
                                artists.filter(a =>
                                    a.id !== artist.id
                                )
                            );
                        }}>
                            删除
                        </button>
                    </li>
                ))) : '无数据'}
            </ul>
        </>
    );
}