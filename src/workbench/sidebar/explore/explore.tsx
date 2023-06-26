import React from 'react';
import { Collapse } from '@/components/collapse';
import { Header, Content } from '@/workbench/sidebar';
import { IExplorer } from '@/model/workbench/explorer/explorer';
import { IExplorerController } from '@/controller/explorer/explorer';
import { Toolbar } from '@/components/toolbar';
import { localize } from '@/i18n/localize';
import { defaultExplorerClassName } from './base';

type IExplorerProps = IExplorer & IExplorerController;

export const Explorer: React.FunctionComponent<IExplorerProps> = (
  props: IExplorerProps
) => {
  const {
    activePanelKeys,
    data = [],
    headerToolBar,
    onClick,
    onActionsContextMenuClick,
    onCollapseChange,
    onToolbarClick,
  } = props;
  return (
    <div className={defaultExplorerClassName}>
      <Header
        title={localize('sidebar.explore.title', 'Explorer')}
        toolbar={
          <Toolbar
            data={[headerToolBar!]}
            onClick={onClick}
            onContextMenuClick={onActionsContextMenuClick}
          />
        }
      />
      <Content>
        <Collapse
          data={data}
          activePanelKeys={activePanelKeys}
          onCollapseChange={onCollapseChange}
          onToolbarClick={onToolbarClick}
        />
      </Content>
    </div>
  );
};
