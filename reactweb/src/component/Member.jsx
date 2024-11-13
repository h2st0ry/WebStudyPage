export default function Member() {
    return (
        <div>
            <h1>Show Your Member</h1>
            <div className="MemberBody">
                <table>
                    <tr style={{ fontSize: 30 }}>Test Table</tr>
                    <tr>
                        <td>2raw 1col</td>
                        <td>2raw 2col</td>
                        <td>2raw 3col</td>
                        <td>2raw 4col</td>
                    </tr>
                    <tr>
                        <td>3raw 1col</td>
                        <td>3raw 2col</td>
                        <td>3raw 3col</td>
                        <td>3raw 4col</td>
                    </tr>
                </table>

                <table>
                    <tr style={{ fontSize: 30 }}>MemberTable</tr>
                    <tr>
                        <td>Name1</td>
                        <td>StudyCount</td>
                        <td>Role</td>
                        <td>Delete</td>
                    </tr>
                    <tr>
                        <td>Name2</td>
                        <td>StudyCount</td>
                        <td>Role</td>
                        <td>Delete</td>
                    </tr>
                    <tr>
                        <td>Name3</td>
                        <td>StudyCount</td>
                        <td>Role</td>
                        <td>Delete</td>
                    </tr>
                    <tr>
                        <td>Name4</td>
                        <td>StudyCount</td>
                        <td>Role</td>
                        <td>Delete</td>
                    </tr>
                    <tr>Add Member Here</tr>
                </table>
            </div>
        </div>
    );
}