import { useState, useEffect } from "react";

export default function Member() {
    const [members, setMembers] = useState([]); 
    const [inputMember, setInputMember] = useState("");

    useEffect(() => {
        const savedMembers = localStorage.getItem("Members");
        if (savedMembers) {
            setMembers(JSON.parse(savedMembers));
        }
    }, []);

    const addMember = () => {
        if (inputMember.trim()) {
            const newMember = { id: Date.now(), text: inputMember, checked: false, deleted: false };
            const updatedMembers = [...members, newMember];

            setMembers(updatedMembers);
            setInputMember("");
            localStorage.setItem("Members", JSON.stringify(updatedMembers));
        }
    };

    const toggleMember = (memberId) => {
        const updatedMembers = members.map((member) =>
            member.id === memberId ? { ...member, checked: !member.checked } : member
        );

        setMembers(updatedMembers);
        localStorage.setItem("Members", JSON.stringify(updatedMembers));
    };

    return (
        <div>
            <h1>Show Your Member</h1>
            <div className="MemberBody">
                <input
                    id="MemberInfo"
                    className="MemberInput"
                    type="text"
                    placeholder="Enter a Member Information"
                    value={inputMember}
                    onChange={(e) => setInputMember(e.target.value)}
                />
                <button id="addButton" className="addButton" onClick={addMember}>
                    Add
                </button>
            </div>

            <ul className="MemberList">
                {members.map((member) => (
                    <li key={member.id} className={member.checked ? "checked" : ""}>
                        <span
                            onClick={() => toggleMember(member.id)}
                            style={{ textDecoration: member.checked ? "line-through" : "none", cursor: "pointer" }}
                        >
                            {member.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
