/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle, withProps, withState, renderComponent } from 'recompose'
import gql from 'graphql-tag';

import { graphql } from 'react-apollo';
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';
/* ------------------------ Initialize Dependencies ------------------------- */
import { apolloQueryRequest } from 'store/departments/actions'
import { fromApollo } from 'store/departments/selectors'
/* ---------------------------- Module Package ------------------------------ */
/*---*--- Recompose ---*---*/
const defaultState = withState({

})
const defaultProps = withProps({

})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {
      switch(this.props.queryStatus) {
        case('initialize'):
          this.props.apolloQueryRequest(this.props.query) // Initialize Apollo Query in Redux Apollo Sagas
          break;
        case('requestReturned'):
          this.setState({
            data: {...this.props.queryData} // Listen for Apollo Query Response in Redux Apollo Sagas
          })
          break;
        case('failure'):
          this.setState({
            status: false
          })
          break;
      }
  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(prevProps.queryStatus !== this.props.queryStatus ) {
      switch(this.props.queryStatus) {
        case('initialize'):
          this.props.apolloQueryRequest(this.props.query) // Initialize Apollo Query in Redux Apollo Sagas
          break;
        case('requestReturned'):
          this.setState({
            data: {...this.props.queryData} // Listen for Apollo Query Response in Redux Apollo Sagas
          })
          break;
        case('failure'):
          this.setState({
            data: null,
            status: 'Failure: Unable to retreive the requested data',
          })
          break;
      }
    }
  }
})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props)=> {
  const userId = props.match && props.match.params.id || null
  const { query }  = props
  const queryData = fromApollo.getQueryData(state, props.query)
  return {
    queryStatus: (fromApollo.getQueryStatus(state, props.query)),
    queryData: props.list ? queryData : queryData[Object.keys(queryData)[0]]
  };
}
const mapDispatchToProps = (dispatch, props) => ({
  apolloQueryRequest: (query) => dispatch(apolloQueryRequest({
    payload:{
      id: props.query,
      gql: props.gql,
      variables: props.variables,
    }
  })),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  defaultState,
  defaultProps,
)(Render);
