import React from "react";
import { Grid, GridProps } from "@mui/material";




const defaultProps = { rowStartAlignment: "left" };

const ROW_BASE = 12;

const DynamicGrid = ( {
	                      children,
	                      maxColumns,
	                      spacing,
	                      columnSpacing,
	                      rowSpacing,
	                      fullWidth,
	                      rowStartAlignment,
                      } ) => {
	const gridChildren = React.Children.map( children, ( child ) => {
		const rowNumber = ( columnsNr ) => {
			if( !fullWidth ) return undefined;
			if( children.length > columnsNr ) {
				return ROW_BASE / columnsNr;
			}
			return ROW_BASE / children.length;
		};
		
		const width = ( maxColumns ) => {
			if( fullWidth ) return undefined;
			
			const makeWidth = ( columnsNr ) => 1 / columnsNr;
			
			return [
				makeWidth( maxColumns.xs ),
				makeWidth( maxColumns.sm ),
				makeWidth( maxColumns.md ),
				makeWidth( maxColumns.lg ),
				makeWidth( maxColumns.xl ),
			];
		};
		
		return (
			<Grid
				item
				xs={ rowNumber( maxColumns.xs ) }
				sm={ rowNumber( maxColumns.sm ) }
				md={ rowNumber( maxColumns.md ) }
				lg={ rowNumber( maxColumns.lg ) }
				xl={ rowNumber( maxColumns.xl ) }
				width={ width( maxColumns ) }
			>
				{ child }
			</Grid>
		);
	} );
	
	const makeStyle = ( columnsNr ) => {
		if( !gridChildren ) return undefined;
		return gridChildren.length > columnsNr ? "left" : "center";
	};
	
	const justifyContent = () => {
		if(
			!gridChildren ||
			gridChildren.length === 0 ||
			rowStartAlignment === "center"
		) {
			return "center";
		}
		
		return [
			makeStyle( maxColumns.xs ),
			makeStyle( maxColumns.sm ),
			makeStyle( maxColumns.md ),
			makeStyle( maxColumns.lg ),
			makeStyle( maxColumns.xl ),
		];
	};
	
	return (
		<Grid
			container
			spacing={ spacing }
			columnSpacing={ columnSpacing }
			rowSpacing={ rowSpacing }
			justifyContent={ justifyContent() }
		>
			{ gridChildren }
		</Grid>
	);
};

DynamicGrid.defaultProps = defaultProps;

export default DynamicGrid;