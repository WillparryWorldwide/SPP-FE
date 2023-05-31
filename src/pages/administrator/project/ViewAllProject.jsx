import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { Link, useNavigate } from "react-router-dom";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import useGetAllProject from "../../../Hooks/usegetallproject";
import moment from "moment";
import { SearchNav, Title } from "../components";
import IconSVG from "../../../components/icon/svg";
import { IconPlus } from "@tabler/icons-react";
import { CircularProgress } from "@mui/material";

const columns = [
	{ id: "name", label: "Name", minWidth: 170, format: (val) => val },
	{ id: "category", label: "Category", minWidth: 70, format: (val) => val },
	{ id: "state", label: "State", minWidth: 70, format: (val) => val },
	{ id: "code", label: "Code", minWidth: 70, format: (val) => val },
	{ id: "grand_total", label: "Grand Total", minWidth: 70, format: (val) => val },
	{ id: "duration", label: "Duration", minWidth: 70, format: (val) => moment(val, "YYYYMMDD").fromNow() },
	{ id: "open", label: "Status", minWidth: 70, format: (val) => val }
];

export default function AllProjects() {
	const [page, setPage] = React.useState(0);
	const navigate = useNavigate();
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const { data, loading, fetchProject } = useGetAllProject();

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handelNavigation = (id) => {
		navigate("/spp/dashboard/project/view/" + id, { replace: true });
	}

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	useEffect(() => {
		fetchProject();
		console.log("Rendering...");
	}, [fetchProject.name]);

	return <>
		<div className="sticky top-0 z-50">
			<SearchNav />
			<Title headText="All Projects"
				icon={
					<span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
						<span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
							<img alt="empty" aria-hidden="true" src={IconSVG.empty} style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
						</span>
						<img alt="icon" src={IconSVG.categoryIcon} decoding="async" data-nimg="intrinsic" className="leftSideBar_nav-icon__7Dhay" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
						<noscript />
					</span>
				}>
				<Link to="/spp/dashboard/projects/register" className="bg-grey-white cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex font-bold hover:bg-EB">
					<IconPlus />
					Add Project
				</Link>
			</Title>
		</div>
		<div className="h-full  p-6">
			<div>
				<div className="flex flex-wrap p-0 pb-28 sm:pb-0" data-testid="discover-projects">
					{
						!loading ?
							<Paper sx={{ width: "100%", overflow: "hidden" }}>
								<TableContainer sx={{ maxHeight: 440 }}>
									<Table stickyHeader aria-label="sticky table">
										<TableHead>
											<TableRow>
												{columns.map((column) => (
													<TableCell
														key={column.id}
														style={{ minWidth: column.minWidth }}
													>
														{column.label}
													</TableCell>
												))}
											</TableRow>
										</TableHead>
										<TableBody>
											{
												data
													.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
													.reverse()
													.map((row) => {
														return (
															<TableRow hover role="checkbox" tabIndex={-1} key={row._id} onClick={() => handelNavigation(row._id)}>
																{columns.map((column) => {
																	const value = row[column.id]
																	return <TableCell key={column.id}>

																		{column.id === "open" ? value.toString() : column.format(value)}
																	</TableCell>
																})}
															</TableRow>
														);
													})
											}
										</TableBody>
									</Table>
								</TableContainer>
								<TablePagination
									rowsPerPageOptions={[10, 25, 100]}
									component="div"
									count={data.length}
									rowsPerPage={rowsPerPage}
									page={page}
									onPageChange={handleChangePage}
									onRowsPerPageChange={handleChangeRowsPerPage}
								/>
							</Paper>
							: <CircularProgress />
					}
				</div>
			</div>
		</div>
	</>
}