import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import './menu-list.scss';
import WithRestoService from '../hoc/with-resto-service';
import { menuLoaded, menuRequested, addedToCart } from '../../actions';
import Spinner from '../spinner';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();

        const { RestoService } = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res));
    }

    render() {
        const { menuItems, loading, addedToCart } = this.props;

        if (loading) {
            return <Spinner />
        }

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem
                            key={menuItem.id}
                            menuItem={menuItem}
                            onAddToCart={() => addedToCart(menuItem.id)} />
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    addedToCart
};


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));