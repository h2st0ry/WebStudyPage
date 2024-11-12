import { Link } from 'react-router-dom';

export default function MyCategory() {
    return (
        <div className="MyCategory">
            <Link to="/MyPage">My Page</Link>
            <Link to="/Member">Member</Link>
        </div>
    );
}