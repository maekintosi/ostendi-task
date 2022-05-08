import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    modalTitle: {
        fontSize: '39px',
        fontWeight: 400,
        color: '#4a4a4a',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #eeeeee',
        padding: '0',
        margin: '41px 33px 0'
    },
    modalContent: {
        padding: '0',
        margin: '30px 33px'
    },
    blueCard: {
        color: '#4a4a4a',
        backgroundColor: '#dfeffe',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #0d50af',
        borderRadius: '5px',
        padding: '29px 23px',
        fontSize: '41px'
    },
    targetWeight: {
        fontWeight: 700,
        color: '#0d50af'
    },
    dataLegend: {
        listStyle: 'none',
        padding: '54px 0 0'
    },
    dataLegend__item: {
        fontSize: '29px',
        display: 'flex',
        alignItems: 'center'
    },
    dataLegend__item__circle: {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        margin: '0 15px 0 0'
    },
    closeButton: {
        color: '#1158fb'
    },
    modalActions: {
        padding: '0',
        margin: '30px 33px'
    }
}));