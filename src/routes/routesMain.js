import React,{lazy} from 'react'

const UserContainer       = lazy(() => import('./../containers/UserContainer/UserContainer'))
const DetailWorkContainer = lazy(() => import('./../containers/DeTailWorkContainer/DeTailWorkContainer'))
const WorkContainer       = lazy(() => import('./../containers/DeTailWorkContainer/WorkContainer'))


export const routesMain = [
    {
        path    : '/user',
        exact   : true,
        main    : ({ match, history }) => <UserContainer match={match} history={history} />

    },
    {
        path    : '/work',
        exact   : true,
        main    : ({ match, history })  => <WorkContainer match={match} history={history} />
    },
    {
        path    : '/work/:idWork',
        exact   : true,
        main    : ({ match, history })  =>  <DetailWorkContainer match={match} history={history} />
    }
]
