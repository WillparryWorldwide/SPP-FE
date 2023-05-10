import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { useNavigate } from "react-router-dom";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ContentHeader from "../../../components/ContentHeader";
import useGetAllProject from "../../../Hooks/usegetallproject";
import moment from "moment";

const columns = [
	{ id: "name", label: "Name", minWidth: 70, format: (val) => val},
	{ id: "category", label: "Category", minWidth: 170, format: (val) => val },
	{ id: "state", label: "State", minWidth: 170, format: (val) => val },
	{ id: "code", label: "Code", minWidth: 170, format: (val) => val },
	{ id: "grand_total", label: "Grand Total", minWidth: 170, format: (val) => val },
	{ id: "duration", label: "Duration", minWidth: 170, format: (val) => moment(val, "YYYYMMDD").fromNow() },
	{ id: "open", label: "Status", minWidth: 170, format: (val) => val }
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
		<ContentHeader title="Project List" />
		<section className="content">
			<div className="container-fluid">
				<div className="card">
					<div className="card-header">
						<h3 className="card-title">All Project</h3>
					</div>
					<div className="card-body">
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
								: <h4>Loading...</h4>
						}
					</div>
				</div>
			</div>
		</section>
	</>
}