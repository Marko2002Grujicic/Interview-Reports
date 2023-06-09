import '../Header.css';
import { useNavigate } from 'react-router';

export const ReportsHeader = () => {
    const navigate = useNavigate();

  return (
    <nav>
      <div className="nav-wrapper blue header reports-header">
        <span className='flow-text header-text'>Reports Administration</span>
        <div>
          <button className='blue button' onClick={()=> navigate('/reports')}>Reports</button> 
          <button className='blue button second-btn' onClick={()=> navigate('/create-report/step1')}>Create Report</button> 
        </div>
      </div>
    </nav>
  );
}