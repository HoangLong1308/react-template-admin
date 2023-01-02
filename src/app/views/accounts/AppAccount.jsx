import { SimpleCard } from 'app/components';
import CollapsibleTable from '../material-kit/tables/CollapsibleTable';
import { Container } from '../material-kit/tables/AppTable';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getAccountList } from 'app/redux/actions/AccountAction';
import { useEffect } from 'react';
import { tableHeader } from 'app/utils/constant';

function AppAccount(props) {
    const { getAccountList, accounts } = props;
    // console.log('1');
    // const dispatch = useDispatch();
    console.log(accounts);
    console.log(tableHeader);
    useEffect(() => {
        getAccountList();
    }, []);
    return (
        <Container>
            <SimpleCard title="Coolapsible Table">
                <CollapsibleTable
                    tableHeader={tableHeader}
                    rows={accounts.accountList}
                />
            </SimpleCard>
        </Container>
    );
}
const mapStateToProps = (state) => ({
    getAccountList: PropTypes.func.isRequired,
    accounts: state.accounts,
});
export default connect(mapStateToProps, { getAccountList })(AppAccount);
