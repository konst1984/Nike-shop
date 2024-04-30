'use client';
import { store } from '@/redux/store';
import React, { FC } from 'react';
import { Provider } from 'react-redux';

interface IRootProvider {
    children: React.ReactNode;
}

const RootProvider: FC<IRootProvider> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default RootProvider;
