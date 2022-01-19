import React, { useState } from 'react'

type IProps = {
    joinRoom: (user: string, room: string) => Promise<void>
}

const Lobby: React.FC<IProps> = ({ joinRoom }) => {
    const [user, setUser] = useState<string>("");
    const [room, setRoom] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        joinRoom(user, room);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
                    <h1 className="text-center text-lg font-bold text-gray-500">Find your room</h1>
                    <div className="space-y-4 mt-6">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <div className="w-full">
                            <input type="text" placeholder="Your name" className="px-4 py-2 bg-gray-50" onChange={e => setUser(e.target.value)} />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700">Room</label>
                            <input type="text" placeholder="Room name" className="px-4 py-2 bg-gray-50" onChange={e => setRoom(e.target.value)} />
                        </div>
                    </div>
                    <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">Access</button>
                </div>
            </div>
        </form>
    );
}

export default Lobby;