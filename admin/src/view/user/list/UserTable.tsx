import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userSelectors from 'src/modules/user/userSelectors';
import selectors from 'src/modules/user/list/userListSelectors';
import actions from 'src/modules/user/list/userListActions';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import Pagination from 'src/view/shared/table/Pagination';
import Spinner from 'src/view/shared/Spinner';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Roles from 'src/security/roles';
import UserStatusView from 'src/view/user/view/UserStatusView';
import Avatar from 'src/view/shared/Avatar';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import recordListActions from 'src/modules/record/list/recordListActions';
import selectorTaskdone from 'src/modules/record/list/recordListSelectors';

function UserTable() {
  const dispatch = useDispatch();
  const [recordIdToDestroy, setRecordIdToDestroy] =
    useState(null);
  const [totalTask, setTotalTasks] = useState('');
  const tasksdone = useSelector(
    selectorTaskdone.selectCountRecord,
  );
  const LoadingTasksDone = useSelector(
    selectorTaskdone.selectLoading,
  );
  const loading = useSelector(selectors.selectLoading);
  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const [showTask, setShowTask] = useState(false)
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);
  const isAllSelected = useSelector(
    selectors.selectIsAllSelected,
  );
  const hasPermissionToEdit = useSelector(
    userSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    userSelectors.selectPermissionToDestroy,
  );

  const doDestroy = (id) => {
    setRecordIdToDestroy(null);
    dispatch(actions.doDestroy(id));
  };

  const doChangeSort = (field) => {
    const order =
      sorter.field === field && sorter.order === 'ascend'
        ? 'descend'
        : 'ascend';

    dispatch(
      actions.doChangeSort({
        field,
        order,
      }),
    );
  };

  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination));
  };

  const doToggleAllSelected = () => {
    dispatch(actions.doToggleAllSelected());
  };

  const doToggleOneSelected = (id) => {
    dispatch(actions.doToggleOneSelected(id));
  };

  const showThecurrentRecord = async (id, totaltask?) => {
    setShowTask(true)
    await dispatch(recordListActions.doTasksDone(id));
    setTotalTasks(totaltask);
  };

  useEffect(() => {}, [dispatch, tasksdone]);

  return (
    <>
      <TableWrapper>
        <div className="table-responsive">
          <table className="table table-striped 2">
            <thead className="thead">
              <tr>
                <TableColumnHeader className="th-checkbox">
                  {hasRows && (
                    <div className="adherent-control adherent-checkbox">
                      <input
                        type="checkbox"
                        className="adherent-control-input"
                        id="table-header-checkbox"
                        checked={Boolean(isAllSelected)}
                        onChange={doToggleAllSelected}
                      />
                      <label
                        htmlFor="table-header-checkbox"
                        className="adherent-control-label"
                      >
                        &#160;
                      </label>
                    </div>
                  )}
                </TableColumnHeader>
                <TableColumnHeader
                  className="text-center"
                  label={i18n('user.fields.avatars')}
                ></TableColumnHeader>
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'email'}
                  label={i18n('user.fields.email')}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'fullName'}
                  label={i18n('user.fields.fullName')}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'invitationcode'}
                  label={i18n('user.fields.invitationcode')}
                />

                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'refcode'}
                  label={i18n('user.fields.refcode')}
                />
        <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'couponcode'}
                  label={i18n('user.fields.couponcode')}
                />

                <TableColumnHeader
                  label={i18n('user.fields.roles')}
                ></TableColumnHeader>
                <TableColumnHeader
                  className="text-center"
                  label={i18n('user.fields.status')}
                />
                <TableColumnHeader
                  className="text-center"
                  label={i18n('user.fields.currentrecord')}
                />
                <TableColumnHeader className="th-actions" />
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={100}>
                    <Spinner />
                  </td>
                </tr>
              )}
              {!loading && !hasRows && (
                <tr>
                  <td colSpan={100}>
                    <div className="d-flex justify-content-center">
                      {i18n('table.noData')}
                    </div>
                  </td>
                </tr>
              )}
              {!loading &&
                rows.map((row) => (
                  <tr key={row.id}>
                    <th className="th-checkbox" scope="row">
                      <div className="adherent-control adherent-checkbox">
                        <input
                          type="checkbox"
                          className="adherent-control-input"
                          id={`table-header-checkbox-${row.id}`}
                          checked={selectedKeys.includes(
                            row.id,
                          )}
                          onChange={() =>
                            doToggleOneSelected(row.id)
                          }
                        />
                        <label
                          htmlFor={`table-header-checkbox-${row.id}`}
                          className="adherent-control-label"
                        >
                          &#160;
                        </label>
                      </div>
                    </th>
                    <td className="text-center">
                      <Avatar
                        src={
                          row.avatars && row.avatars.length
                            ? row.avatars[0].downloadUrl
                            : undefined
                        }
                        alt="avatar"
                      />
                    </td>
                    <td>{row.email}</td>
                    <td>{row.fullName}</td>
                    <td>{row.invitationcode}</td>
                    <td>{row.refcode}</td>
                    <td>{row.couponcode}</td>

                    <td>
                      {row.roles.map((roleId) => (
                        <div key={roleId}>
                          <span>
                            {Roles.labelOf(roleId)}
                          </span>
                        </div>
                      ))}
                    </td>
                    <td className="text-center">
                      <UserStatusView value={row.status} />
                    </td>

                    <td>
                      <button
                        onClick={() =>
                          showThecurrentRecord(
                            row.id,
                            row?.vip?.dailyorder,
                          )
                        }
                      >
                        Show{' '}
                      </button>
                    </td>

                    <td className="td-actions">
                      <Link
                        className="btn btn-link"
                        to={`/user/${row.id}`}
                      >
                        {i18n('common.view')}
                      </Link>
                      {hasPermissionToEdit && (
                        <Link
                          className="btn btn-link"
                          to={`/user/${row.id}/edit`}
                        >
                          {i18n('common.edit')}
                        </Link>
                      )}
                      {hasPermissionToDestroy && (
                        <button
                          className="btn btn-link"
                          onClick={() =>
                            setRecordIdToDestroy(row.id)
                          }
                        >
                          {i18n('common.destroy')}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <Pagination
          onChange={doChangePagination}
          disabled={loading}
          pagination={pagination}
        />
      </TableWrapper>

      {recordIdToDestroy && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy(recordIdToDestroy)}
          onClose={() => setRecordIdToDestroy(null)}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
      {!LoadingTasksDone && showTask && (
        <div className="modal__socore">
          <div className='score__close' onClick={() => setShowTask(false)}> <i className='fa fa-close font' /></div>
          <div className="modal__contentscore">
            <p className="text__score">
              {tasksdone} / {totalTask}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default UserTable;
