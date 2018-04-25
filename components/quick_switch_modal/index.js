// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import QuickSwitchModal from './quick_switch_modal.jsx';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        showTeamSwitcher: false,
    };
}

export default connect(mapStateToProps)(QuickSwitchModal);
