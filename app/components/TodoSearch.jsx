var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var Search = React.createClass({
    render: function(){
        var {dispatch, showCompleted, searchText} = this.props;
        return(
            <div className='container__header'>
              <div>
                   <input type="search" ref="searchText" placeholder="Enter keyword to search" value={searchText} onChange={
                          () => {
                              var searchText = this.refs.searchText.value;
                              dispatch(actions.setSearchText(searchText));
                          }
                      }/>
              </div>
               <div>
                      <label>
                           <input className="show-completed" type="checkbox" ref="showCompleted" checked={showCompleted} onChange={
                                  ()=>{
                                      dispatch(actions.toggleShowCompleted());
                                  }
                              }/>
                           Show completed todo
                      </label>
                      
               </div>
               
            
            </div>
   
        );
    }
});

//module.exports = Search;
export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        }
    }
)(Search);